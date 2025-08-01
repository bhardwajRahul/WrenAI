import logging
from typing import Dict, List, Literal, Optional

from cachetools import TTLCache
from langfuse.decorators import observe
from pydantic import BaseModel

from src.core.pipeline import BasicPipeline
from src.pipelines.indexing.instructions import Instruction
from src.utils import trace_metadata
from src.web.v1.services import BaseRequest, MetadataTraceable

logger = logging.getLogger("wren-ai-service")


class InstructionsService:
    class Instruction(BaseModel):
        id: str
        instruction: str
        questions: List[str]
        # This is used to identify the default instruction needed to be retrieved for the project
        is_default: bool = False
        scope: Literal["sql", "answer", "chart"] = "sql"

    class Error(BaseModel):
        code: Literal["OTHERS"]
        message: str

    class Event(BaseModel, MetadataTraceable):
        event_id: str
        status: Literal["indexing", "deleting", "finished", "failed"] = "indexing"
        error: Optional["InstructionsService.Error"] = None
        trace_id: Optional[str] = None
        request_from: Literal["ui", "api"] = "ui"

    def __init__(
        self,
        pipelines: Dict[str, BasicPipeline],
        maxsize: int = 1_000_000,
        ttl: int = 120,
    ):
        self._pipelines = pipelines
        self._cache: Dict[str, self.Event] = TTLCache(maxsize=maxsize, ttl=ttl)

    # todo: move it to utils for super class?
    def _handle_exception(
        self,
        id: str,
        error_message: str,
        code: str = "OTHERS",
        trace_id: Optional[str] = None,
        request_from: Literal["ui", "api"] = "ui",
    ):
        self._cache[id] = self.Event(
            event_id=id,
            status="failed",
            error=self.Error(code=code, message=error_message),
            trace_id=trace_id,
            request_from=request_from,
        )
        logger.error(error_message)

    class IndexRequest(BaseRequest):
        event_id: str
        instructions: List["InstructionsService.Instruction"]

    @observe(name="Index Instructions")
    @trace_metadata
    async def index(
        self,
        request: IndexRequest,
        **kwargs,
    ):
        logger.info(
            f"Request {request.event_id}: Instructions Indexing process is running..."
        )
        trace_id = kwargs.get("trace_id")

        try:
            instructions = []
            for instruction in request.instructions:
                if instruction.is_default:
                    instructions.append(
                        Instruction(
                            id=instruction.id,
                            instruction=instruction.instruction,
                            question="",
                            is_default=True,
                            scope=instruction.scope,
                        )
                    )
                else:
                    for question in instruction.questions:
                        instructions.append(
                            Instruction(
                                id=instruction.id,
                                instruction=instruction.instruction,
                                question=question,
                                is_default=False,
                                scope=instruction.scope,
                            )
                        )

            await self._pipelines["instructions_indexing"].run(
                project_id=request.project_id,
                instructions=instructions,
            )

            self._cache[request.event_id] = self.Event(
                event_id=request.event_id,
                status="finished",
                trace_id=trace_id,
                request_from=request.request_from,
            )

        except Exception as e:
            self._handle_exception(
                request.event_id,
                f"An error occurred during instructions indexing: {str(e)}",
                trace_id=trace_id,
                request_from=request.request_from,
            )

        return self._cache[request.event_id].with_metadata()

    class DeleteRequest(BaseRequest):
        event_id: str
        instruction_ids: List[str]

    @observe(name="Delete Instructions")
    @trace_metadata
    async def delete(
        self,
        request: DeleteRequest,
        **kwargs,
    ):
        logger.info(
            f"Request {request.event_id}: Instructions Deletion process is running..."
        )
        trace_id = kwargs.get("trace_id")

        try:
            instructions = [Instruction(id=id) for id in request.instruction_ids]
            await self._pipelines["instructions_indexing"].clean(
                instructions=instructions, project_id=request.project_id
            )

            self._cache[request.event_id] = self.Event(
                event_id=request.event_id,
                status="finished",
                trace_id=trace_id,
                request_from=request.request_from,
            )
        except Exception as e:
            self._handle_exception(
                request.event_id,
                f"Failed to delete instructions: {e}",
                trace_id=trace_id,
                request_from=request.request_from,
            )

        return self._cache[request.event_id].with_metadata()

    def __getitem__(self, event_id: str) -> Event:
        response = self._cache.get(event_id)

        if response is None:
            message = f"Instructions Event with ID '{event_id}' not found."
            logger.exception(message)
            return self.Event(
                event_id=event_id,
                status="failed",
                error=self.Error(code="OTHERS", message=message),
            )

        return response

    def __setitem__(self, event_id: str, value: Event):
        self._cache[event_id] = value
