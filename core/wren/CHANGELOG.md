# Changelog

## [0.6.0](https://github.com/bhardwajRahul/WrenAI/compare/wren-v0.5.0...wren-v0.6.0) (2026-05-06)


### Features

* add MDL layout versioning and dialect field on Model and View ([#1556](https://github.com/bhardwajRahul/WrenAI/issues/1556)) ([db2f0e4](https://github.com/bhardwajRahul/WrenAI/commit/db2f0e4689b3565989288489c57a3e5a55a2f3ef))
* add wren-core-wasm module with browser WASM support ([#1568](https://github.com/bhardwajRahul/WrenAI/issues/1568)) ([5165a20](https://github.com/bhardwajRahul/WrenAI/commit/5165a2099aeb7c9d7fef4ec78771e9efcb58db1c))
* **core:** import wren-engine into core/ ([cc9b67f](https://github.com/bhardwajRahul/WrenAI/commit/cc9b67f593bf94c7418e0abb0ed46aa4a21613c3))
* **core:** import wren-engine into core/ ([#2209](https://github.com/bhardwajRahul/WrenAI/issues/2209)) ([8b8a1a3](https://github.com/bhardwajRahul/WrenAI/commit/8b8a1a3c5bf2a43d56ea1587782a0d5d853803b2))
* **wren-core:** add refSql model support ([#1555](https://github.com/bhardwajRahul/WrenAI/issues/1555)) ([815889c](https://github.com/bhardwajRahul/WrenAI/commit/815889c69bdf5dd4dc13d4dd06ae3bfd160b6e73))
* **wren:** .env-driven profile secrets, auto connection validation, and wren-install-guide skill ([#1588](https://github.com/bhardwajRahul/WrenAI/issues/1588)) ([bdd0758](https://github.com/bhardwajRahul/WrenAI/commit/bdd0758e0778d97a187178e60e663944a221ceaa))
* **wren:** add `wren docs connection-info` CLI command ([#1507](https://github.com/bhardwajRahul/WrenAI/issues/1507)) ([6159d98](https://github.com/bhardwajRahul/WrenAI/commit/6159d98efb0449f5b167815a5018ef28e0e6914e))
* **wren:** add LanceDB-backed memory layer for schema and query retrieval ([#1494](https://github.com/bhardwajRahul/WrenAI/issues/1494)) ([d8c1511](https://github.com/bhardwajRahul/WrenAI/commit/d8c1511049725b19541ac57b6106368615b1739e))
* **wren:** add memory list, forget, dump & load commands ([#1531](https://github.com/bhardwajRahul/WrenAI/issues/1531)) ([8660f58](https://github.com/bhardwajRahul/WrenAI/commit/8660f587cfd13dc7647bdb750482e5c3f5468962))
* **wren:** add profile management for named connection profiles ([#1509](https://github.com/bhardwajRahul/WrenAI/issues/1509)) ([85ea8bb](https://github.com/bhardwajRahul/WrenAI/commit/85ea8bb5a441957b49bec0bcb340c3aa977460a9))
* **wren:** add standalone wren Python SDK package ([#1471](https://github.com/bhardwajRahul/WrenAI/issues/1471)) ([5bc9893](https://github.com/bhardwajRahul/WrenAI/commit/5bc98938b4ebb867f19e4b2e28dce89e272efdd6))
* **wren:** CLI 0.2.0 — context management, profiles, strict mode & memory ([#1522](https://github.com/bhardwajRahul/WrenAI/issues/1522)) ([b31a1c1](https://github.com/bhardwajRahul/WrenAI/commit/b31a1c191fe7a9893538376a75fe142558c08dcd))
* **wren:** CTE-based SQL planning with per-model expansion ([#1479](https://github.com/bhardwajRahul/WrenAI/issues/1479)) ([d70f789](https://github.com/bhardwajRahul/WrenAI/commit/d70f789bb99a7786d7281552b163fa324e318463))
* **wren:** extend standalone CLI with MySQL support and auto-discovery ([#1476](https://github.com/bhardwajRahul/WrenAI/issues/1476)) ([c7e7133](https://github.com/bhardwajRahul/WrenAI/commit/c7e7133d659986d914b6346d1d4fc2c1b4f0822a))
* **wren:** generate AGENTS.md during `wren context init` ([#1526](https://github.com/bhardwajRahul/WrenAI/issues/1526)) ([9990bc8](https://github.com/bhardwajRahul/WrenAI/commit/9990bc866859305a3fe183835942e4a0ea0252cd))
* **wren:** preserve SELECT * in CTE rewriter ([#1536](https://github.com/bhardwajRahul/WrenAI/issues/1536)) ([0afaef7](https://github.com/bhardwajRahul/WrenAI/commit/0afaef737292189d36a59fab61728d9ca6d2ad35))


### Bug Fixes

* **oracle:** replace ibis[oracle] with native oracledb cursor connector ([#1495](https://github.com/bhardwajRahul/WrenAI/issues/1495)) ([a230488](https://github.com/bhardwajRahul/WrenAI/commit/a2304880e41bcb826ceb69bf8173caca3f39226e))
* **wren:** address CodeRabbit review feedback ([a28058d](https://github.com/bhardwajRahul/WrenAI/commit/a28058d4bb2ba958dd329c0348192bfebaf1d835))
* **wren:** fix CLI 0.2.0 docs — description placement, install extras, CLI flags ([#1523](https://github.com/bhardwajRahul/WrenAI/issues/1523)) ([72c4917](https://github.com/bhardwajRahul/WrenAI/commit/72c491750254dc9d30c64c419b38b2caa28bbb7f))
* **wren:** suppress model-loading noise and improve memory CLI error message ([#1529](https://github.com/bhardwajRahul/WrenAI/issues/1529)) ([1135c0c](https://github.com/bhardwajRahul/WrenAI/commit/1135c0c333f6b1a08c84afa29c8d8d7ccead5cbb))


### Dependencies

* **wren:** bump transitive deps for security patches ([d064db6](https://github.com/bhardwajRahul/WrenAI/commit/d064db69ef7319c558c3fc29beedde16c17a921f))

## [0.5.0](https://github.com/Canner/WrenAI/compare/wren-v0.4.0...wren-v0.5.0) (2026-05-05)


### Features

* **core:** import wren-engine into core/ ([cc9b67f](https://github.com/Canner/WrenAI/commit/cc9b67f593bf94c7418e0abb0ed46aa4a21613c3))
* **core:** import wren-engine into core/ ([#2209](https://github.com/Canner/WrenAI/issues/2209)) ([8b8a1a3](https://github.com/Canner/WrenAI/commit/8b8a1a3c5bf2a43d56ea1587782a0d5d853803b2))

## [0.4.0](https://github.com/Canner/wren-engine/compare/wren-v0.3.0...wren-v0.4.0) (2026-04-30)


### Features

* **wren:** .env-driven profile secrets, auto connection validation, and wren-install-guide skill ([#1588](https://github.com/Canner/wren-engine/issues/1588)) ([38ceaf1](https://github.com/Canner/wren-engine/commit/38ceaf1f73a91bf123e609aa6e402d5b971d3340))

## [0.3.0](https://github.com/Canner/wren-engine/compare/wren-v0.2.0...wren-v0.3.0) (2026-04-20)


### Features

* add MDL layout versioning and dialect field on Model and View ([#1556](https://github.com/Canner/wren-engine/issues/1556)) ([0384931](https://github.com/Canner/wren-engine/commit/03849312d5934c606c0e43d0bd41d091892b4454))
* add wren-core-wasm module with browser WASM support ([#1568](https://github.com/Canner/wren-engine/issues/1568)) ([4f9201b](https://github.com/Canner/wren-engine/commit/4f9201b7f98ce34fba9069b10da7a52b2c338b8b))
* **wren-core:** add refSql model support ([#1555](https://github.com/Canner/wren-engine/issues/1555)) ([bdaddf2](https://github.com/Canner/wren-engine/commit/bdaddf25bb9c10287b7f2062e727c26ac0e76303))
* **wren:** add `wren docs connection-info` CLI command ([#1507](https://github.com/Canner/wren-engine/issues/1507)) ([87efbfd](https://github.com/Canner/wren-engine/commit/87efbfdb91aece1c46999a3cc1bae72b77de778b))
* **wren:** add LanceDB-backed memory layer for schema and query retrieval ([#1494](https://github.com/Canner/wren-engine/issues/1494)) ([dfdff01](https://github.com/Canner/wren-engine/commit/dfdff010371f649abfa999b9fd08a729b81b15f2))
* **wren:** add memory list, forget, dump & load commands ([#1531](https://github.com/Canner/wren-engine/issues/1531)) ([de424e8](https://github.com/Canner/wren-engine/commit/de424e8b08d4125456895935e99dfd79ddd21f3f))
* **wren:** add profile management for named connection profiles ([#1509](https://github.com/Canner/wren-engine/issues/1509)) ([b086576](https://github.com/Canner/wren-engine/commit/b086576fbc0ead4ce46af915403a5c7268eac525))
* **wren:** add standalone wren Python SDK package ([#1471](https://github.com/Canner/wren-engine/issues/1471)) ([41f3f21](https://github.com/Canner/wren-engine/commit/41f3f21f97aba6418b087c1d6437183fdd30f2b3))
* **wren:** CLI 0.2.0 — context management, profiles, strict mode & memory ([#1522](https://github.com/Canner/wren-engine/issues/1522)) ([fbec650](https://github.com/Canner/wren-engine/commit/fbec650d4e44a62a3ed7fa3a943c74af83d63402))
* **wren:** CTE-based SQL planning with per-model expansion ([#1479](https://github.com/Canner/wren-engine/issues/1479)) ([fca2b11](https://github.com/Canner/wren-engine/commit/fca2b11bb4d2d45d883803f75605f0b84571188f))
* **wren:** extend standalone CLI with MySQL support and auto-discovery ([#1476](https://github.com/Canner/wren-engine/issues/1476)) ([6a78c12](https://github.com/Canner/wren-engine/commit/6a78c1210e0bd36e34984f85ae7e240a70b5ef0f))
* **wren:** generate AGENTS.md during `wren context init` ([#1526](https://github.com/Canner/wren-engine/issues/1526)) ([40bf46f](https://github.com/Canner/wren-engine/commit/40bf46f636d38f39f01fc005583d71c1679a2507))
* **wren:** preserve SELECT * in CTE rewriter ([#1536](https://github.com/Canner/wren-engine/issues/1536)) ([ed03388](https://github.com/Canner/wren-engine/commit/ed03388f7534a4f85b85a4fd3b6fc8a36179425e))


### Bug Fixes

* **oracle:** replace ibis[oracle] with native oracledb cursor connector ([#1495](https://github.com/Canner/wren-engine/issues/1495)) ([2e3c1de](https://github.com/Canner/wren-engine/commit/2e3c1def9645dcab3e0105bfa7053e740d162f83))
* **wren:** address CodeRabbit review feedback ([9c46f55](https://github.com/Canner/wren-engine/commit/9c46f554d0e25ce1000be11a496718289092e81d))
* **wren:** fix CLI 0.2.0 docs — description placement, install extras, CLI flags ([#1523](https://github.com/Canner/wren-engine/issues/1523)) ([536988e](https://github.com/Canner/wren-engine/commit/536988edeb1055620e0204f25243cbc70ee25f8a))
* **wren:** suppress model-loading noise and improve memory CLI error message ([#1529](https://github.com/Canner/wren-engine/issues/1529)) ([bd20444](https://github.com/Canner/wren-engine/commit/bd204445d81805e3b54cb9f441177f06c5e45eb8))


### Dependencies

* **wren:** bump transitive deps for security patches ([53c16c4](https://github.com/Canner/wren-engine/commit/53c16c4a36eb7dbe1bb467c4cb05b0b64b6ec902))
