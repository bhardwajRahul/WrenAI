import { GraphQLError } from 'graphql';
import { WrenService } from '../telemetry/telemetry';

export enum GeneralErrorCodes {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  // AI service errors
  NO_RELEVANT_DATA = 'NO_RELEVANT_DATA',
  NO_RELEVANT_SQL = 'NO_RELEVANT_SQL',
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  MDL_PARSE_ERROR = 'MDL_PARSE_ERROR',
  NO_CHART = 'NO_CHART',

  // Exception error for AI service (e.g., network connection error)
  AI_SERVICE_UNDEFINED_ERROR = 'OTHERS',

  // IBIS Error
  IBIS_SERVER_ERROR = 'IBIS_SERVER_ERROR',

  // Connector errors
  CONNECTION_ERROR = 'CONNECTION_ERROR',
  // duckdb
  INIT_SQL_ERROR = 'INIT_SQL_ERROR',
  SESSION_PROPS_ERROR = 'SESSION_PROPS_ERROR',
  // postgres
  CONNECTION_REFUSED = 'CONNECTION_REFUSED',

  // calculated field validation
  DUPLICATED_FIELD_NAME = 'DUPLICATED_FIELD_NAME',
  INVALID_EXPRESSION = 'INVALID_EXPRESSION',
  INVALID_CALCULATED_FIELD = 'INVALID_CALCULATED_FIELD',

  // when createing views
  INVALID_VIEW_CREATION = 'INVALID_VIEW_CREATION',

  // dry run error
  DRY_RUN_ERROR = 'DRY_RUN_ERROR',
  DRY_PLAN_ERROR = 'DRY_PLAN_ERROR',

  // deploy sql pair error
  DEPLOY_SQL_PAIR_ERROR = 'DEPLOY_SQL_PAIR_ERROR',
  GENERATE_QUESTIONS_ERROR = 'GENERATE_QUESTIONS_ERROR',
  INVALID_SQL_ERROR = 'INVALID_SQL_ERROR',

  // wren engine error
  WREN_ENGINE_ERROR = 'WREN_ENGINE_ERROR',

  // asking task error
  // when rerun from cancelled, the task is identified as general or misleading query
  IDENTIED_AS_GENERAL = 'IDENTIED_AS_GENERAL',
  IDENTIED_AS_MISLEADING_QUERY = 'IDENTIED_AS_MISLEADING_QUERY',
  DEPLOY_TIMEOUT_ERROR = 'DEPLOY_TIMEOUT_ERROR',

  // api error
  NON_SQL_QUERY = 'NON_SQL_QUERY',
  NO_DEPLOYMENT_FOUND = 'NO_DEPLOYMENT_FOUND',

  // vega schema error
  FAILED_TO_GENERATE_VEGA_SCHEMA = 'FAILED_TO_GENERATE_VEGA_SCHEMA',
  POLLING_TIMEOUT = 'POLLING_TIMEOUT',

  // sql execution error
  SQL_EXECUTION_ERROR = 'SQL_EXECUTION_ERROR',
}

export const errorMessages = {
  [GeneralErrorCodes.INTERNAL_SERVER_ERROR]: 'Internal server error',

  // AI service errors
  [GeneralErrorCodes.NO_RELEVANT_DATA]:
    "I can't find the exact data you're looking for, but feel free to ask about other available topics.",
  [GeneralErrorCodes.NO_RELEVANT_SQL]:
    "Could you please provide more details or specify the information you're seeking?",
  [GeneralErrorCodes.NO_CHART]:
    "The chart couldn't be generated this time. Please try regenerating the chart or rephrasing your question for better results.",

  // Connector errors
  [GeneralErrorCodes.CONNECTION_ERROR]: 'Can not connect to data source',
  // duckdb
  [GeneralErrorCodes.INIT_SQL_ERROR]:
    'The initializing SQL seems to be invalid, Please check your SQL and try again.',
  [GeneralErrorCodes.SESSION_PROPS_ERROR]:
    'The session properties seem to be invalid, Please check your session properties and try again.',
  // postgres
  [GeneralErrorCodes.CONNECTION_REFUSED]:
    'Connection refused by the server, Please check your connection settings and try again.',

  // ibis service errors
  [GeneralErrorCodes.IBIS_SERVER_ERROR]:
    'Error occurred while querying ibis server, please try again later.',

  // calculated field validation
  [GeneralErrorCodes.DUPLICATED_FIELD_NAME]: 'This field name already exists',
  [GeneralErrorCodes.INVALID_EXPRESSION]:
    'Invalid expression, please check your expression and try again.',
  [GeneralErrorCodes.INVALID_CALCULATED_FIELD]:
    'Can not execute a query when using this calculated field',

  // when createing views
  [GeneralErrorCodes.INVALID_VIEW_CREATION]: 'Invalid view creation',

  // dry run error
  [GeneralErrorCodes.DRY_RUN_ERROR]: 'Dry run sql statement error',
  [GeneralErrorCodes.DRY_PLAN_ERROR]: 'Dry plan error',

  // deploy sql pair error
  [GeneralErrorCodes.DEPLOY_SQL_PAIR_ERROR]: 'Deploy sql pair error',
  [GeneralErrorCodes.GENERATE_QUESTIONS_ERROR]: 'Generate questions error',
  [GeneralErrorCodes.INVALID_SQL_ERROR]:
    'Invalid SQL, please check your SQL syntax',

  // asking task error
  [GeneralErrorCodes.IDENTIED_AS_GENERAL]:
    'The question is identified as a general question, please follow-up ask with more specific questions.',
  [GeneralErrorCodes.IDENTIED_AS_MISLEADING_QUERY]:
    'The question is identified as a misleading query, please follow-up ask with more specific questions.',
  [GeneralErrorCodes.DEPLOY_TIMEOUT_ERROR]:
    'LLM deployment timed out after 30 seconds',

  // api error
  [GeneralErrorCodes.NON_SQL_QUERY]: 'Cannot generate SQL from this question.',
  [GeneralErrorCodes.NO_DEPLOYMENT_FOUND]:
    'No deployment found, please deploy your project first',

  // vega schema error
  [GeneralErrorCodes.FAILED_TO_GENERATE_VEGA_SCHEMA]:
    'Failed to generate Vega spec',
  [GeneralErrorCodes.POLLING_TIMEOUT]: 'Polling timeout',

  // sql execution error
  [GeneralErrorCodes.SQL_EXECUTION_ERROR]: 'SQL execution error',
};

export const shortMessages = {
  [GeneralErrorCodes.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [GeneralErrorCodes.NO_RELEVANT_DATA]: 'Try a different query',
  [GeneralErrorCodes.NO_RELEVANT_SQL]: 'Clarification needed',
  [GeneralErrorCodes.NO_CHART]: 'Chart not available',
  [GeneralErrorCodes.CONNECTION_ERROR]: 'Failed to connect',
  [GeneralErrorCodes.IBIS_SERVER_ERROR]: 'Data connection error',
  [GeneralErrorCodes.INIT_SQL_ERROR]: 'Invalid initializing SQL',
  [GeneralErrorCodes.SESSION_PROPS_ERROR]: 'Invalid session properties',
  [GeneralErrorCodes.CONNECTION_REFUSED]: 'Connection refused',
  [GeneralErrorCodes.DUPLICATED_FIELD_NAME]: 'Duplicated field name',
  [GeneralErrorCodes.INVALID_EXPRESSION]: 'Invalid expression',
  [GeneralErrorCodes.INVALID_CALCULATED_FIELD]: 'Invalid calculated field',
  [GeneralErrorCodes.INVALID_VIEW_CREATION]: 'Invalid view creation',
  [GeneralErrorCodes.DRY_RUN_ERROR]: 'Dry run sql statement error',
  [GeneralErrorCodes.DRY_PLAN_ERROR]: 'Dry plan error',
  [GeneralErrorCodes.DEPLOY_SQL_PAIR_ERROR]: 'Deploy sql pair error',
  [GeneralErrorCodes.GENERATE_QUESTIONS_ERROR]: 'Generate questions error',
  [GeneralErrorCodes.INVALID_SQL_ERROR]:
    'Invalid SQL, please check your SQL syntax',
  [GeneralErrorCodes.IDENTIED_AS_GENERAL]: 'Identified as general question',
  [GeneralErrorCodes.IDENTIED_AS_MISLEADING_QUERY]:
    'Identified as misleading query',
  [GeneralErrorCodes.DEPLOY_TIMEOUT_ERROR]: 'LLM deployment timed out',
  [GeneralErrorCodes.NON_SQL_QUERY]: 'Cannot generate SQL from this question.',
  [GeneralErrorCodes.NO_DEPLOYMENT_FOUND]:
    'No deployment found, please deploy your project first',
  [GeneralErrorCodes.FAILED_TO_GENERATE_VEGA_SCHEMA]:
    'Failed to generate Vega spec',
  [GeneralErrorCodes.POLLING_TIMEOUT]: 'Polling timeout',
  [GeneralErrorCodes.SQL_EXECUTION_ERROR]: 'SQL execution error',
};

export const create = (
  code?: GeneralErrorCodes,
  options?: {
    customMessage?: string;
    originalError?: Error;
    service?: WrenService;
    other?: any;
  },
): GraphQLError => {
  const { customMessage, originalError, service } = options || {};
  // Default to INTERNAL_SERVER_ERROR if no code is provided
  code = code || GeneralErrorCodes.INTERNAL_SERVER_ERROR;

  // Get the error message based on the code
  const message =
    customMessage ||
    originalError?.message ||
    errorMessages[code] ||
    errorMessages[GeneralErrorCodes.INTERNAL_SERVER_ERROR];

  // Return the GraphQLError
  const err = new GraphQLError(message, {
    extensions: {
      originalError,
      code,
      message,
      service,
      shortMessage:
        shortMessages[code] ||
        shortMessages[GeneralErrorCodes.INTERNAL_SERVER_ERROR],
      other: options?.other,
    },
  });

  return err;
};

/**
 * Default error handler for Apollo Server
 * For error like this:
 * [GraphQLError: connect ECONNREFUSED 127.0.0.1:8080] {
 *   locations: [ { line: 2, column: 3 } ],
 *   path: [ 'previewData' ],
 *   extensions: {
 *     code: 'INTERNAL_SERVER_ERROR',
 *     exception: {
 *       port: 8080,
 *       address: '127.0.0.1',
 *       syscall: 'connect',
 *       code: 'ECONNREFUSED',
 *       errno: -61,
 *       message: 'connect ECONNREFUSED 127.0.0.1:8080',
 *       stack: 'Error: connect ECONNREFUSED 127.0.0.1:8080\n' +
 *         '    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1278:16)',
 *       name: 'Error',
 *       config: [Object],
 *       request: [Writable],
 *       stacktrace: [Array]
 *     }
 *   }
 * }
 * it will easily cause `Converting circular structure to JSON` error.
 * Thus, we only pick required fields to reformat the error.
 */
export const defaultApolloErrorHandler = (error: GraphQLError) => {
  if (error instanceof GraphQLError) {
    const code = (error.extensions?.code ||
      GeneralErrorCodes.INTERNAL_SERVER_ERROR) as GeneralErrorCodes;
    return {
      locations: error.locations,
      path: error.path,
      message: error.message,
      extensions: {
        code,
        message: error.message,
        shortMessage: shortMessages[code],
        stacktrace: error.extensions?.exception?.stacktrace,
      },
    };
  }

  // Return the original error if it's not a GraphQLError
  return error;
};
