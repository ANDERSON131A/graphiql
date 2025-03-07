# Change Log

## 0.4.15

### Patch Changes

- Updated dependencies [[`edc1c964`](https://github.com/graphql/graphiql/commit/edc1c96477cc2fbc2b6ac5d6195b8f9766a8c5d4)]:
  - graphql-language-service-server@2.7.29

## 0.4.14

### Patch Changes

- [#2519](https://github.com/graphql/graphiql/pull/2519) [`de5d5a07`](https://github.com/graphql/graphiql/commit/de5d5a07891fd49241a5abbb17eaf377a015a0a8) Thanks [@acao](https://github.com/acao)! - enable graphql-config legacy mode by default in the LSP server

* [#2509](https://github.com/graphql/graphiql/pull/2509) [`737d4184`](https://github.com/graphql/graphiql/commit/737d4184f3af1d8fe9d64eb1b7e23dfcfbe640ea) Thanks [@Chnapy](https://github.com/Chnapy)! - Add ` gql(``) `, ` graphql(``) ` call expressions support for highlighting & language

* Updated dependencies [[`de5d5a07`](https://github.com/graphql/graphiql/commit/de5d5a07891fd49241a5abbb17eaf377a015a0a8), [`737d4184`](https://github.com/graphql/graphiql/commit/737d4184f3af1d8fe9d64eb1b7e23dfcfbe640ea)]:
  - graphql-language-service-server@2.7.28

## 0.4.13

### Patch Changes

- Updated dependencies [[`cccefa70`](https://github.com/graphql/graphiql/commit/cccefa70c0466d60e8496e1df61aeb1490af723c)]:
  - graphql-language-service-server@2.7.27

## 0.4.12

### Patch Changes

- Updated dependencies [[`c9c51b8a`](https://github.com/graphql/graphiql/commit/c9c51b8a98e1f0427272d3e9ad60989b32f1a1aa)]:
  - graphql-language-service-server@2.7.26

## 0.4.11

### Patch Changes

- Updated dependencies [[`cf092f59`](https://github.com/graphql/graphiql/commit/cf092f5960eae250bb193b9011b2fb883f797a99)]:
  - graphql-language-service-server@2.7.25

## 0.4.10

### Patch Changes

- [#2474](https://github.com/graphql/graphiql/pull/2474) [`70bc61ee`](https://github.com/graphql/graphiql/commit/70bc61ee78787132d5572ef5d1e81e7d6e3b13d2) Thanks [@acao](https://github.com/acao)! - Fix bug with typed parameters on the gql/graphql/etc tagged templates!

## 0.4.8

### Patch Changes

- [#2470](https://github.com/graphql/graphiql/pull/2470) [`d0017a93`](https://github.com/graphql/graphiql/commit/d0017a93b818cf3119e51c2b6c4a19004f98e29b) Thanks [@acao](https://github.com/acao)! - Aims to resolve #2421

  - graphql config errors only log to output channel, no longer crash the LSP
  - more performant LSP request no-ops for failing/missing config

  this used to fail silently in the output channel, but vscode introduced a new retry and notification for this

  would like to provide more helpful graphql config DX in the future but this should be better for now

- Updated dependencies [[`d0017a93`](https://github.com/graphql/graphiql/commit/d0017a93b818cf3119e51c2b6c4a19004f98e29b)]:
  - graphql-language-service-server@2.7.24

## 0.4.7

### Patch Changes

- [#2417](https://github.com/graphql/graphiql/pull/2417) [`6ca6a92d`](https://github.com/graphql/graphiql/commit/6ca6a92d0fd12af974683de9706c8e8e06c751c2) Thanks [@acao](https://github.com/acao)! - fix annoying trigger character on newline issue #2182

- Updated dependencies [[`6ca6a92d`](https://github.com/graphql/graphiql/commit/6ca6a92d0fd12af974683de9706c8e8e06c751c2)]:
  - graphql-language-service-server@2.7.23

## 0.4.6

### Patch Changes

- [#2395](https://github.com/graphql/graphiql/pull/2395) [`f7f1e900`](https://github.com/graphql/graphiql/commit/f7f1e9001ba773bdccb29e513a188384cd805834) Thanks [@acao](https://github.com/acao)! - Release `vscode-graphql` changes since publishing was broken

## 0.4.5

### Patch Changes

- [#2382](https://github.com/graphql/graphiql/pull/2382) [`1bea864d`](https://github.com/graphql/graphiql/commit/1bea864d05dee04bb20c06dc3c3d68675b87a50a) Thanks [@acao](https://github.com/acao)! - allow disabling query/SDL validation with `graphql-config` setting `{ extensions: { languageService: { enableValidation: false } } }`.

  Currently, users receive duplicate validation messages when using our LSP alongside existing validation tools like `graphql-eslint`, and this allows them to disable the LSP feature in that case.

- Updated dependencies [[`6db28447`](https://github.com/graphql/graphiql/commit/6db284479a14873fea3e359efd71be0b15ab3ee8), [`1bea864d`](https://github.com/graphql/graphiql/commit/1bea864d05dee04bb20c06dc3c3d68675b87a50a)]:
  - graphql-language-service-server@2.7.22

## 0.4.4

### Patch Changes

- Updated dependencies [[`d22f6111`](https://github.com/graphql/graphiql/commit/d22f6111a60af25727d8dbc1058c79607df76af2)]:
  - graphql-language-service-server@2.7.21

## 0.4.3

### Patch Changes

- Updated dependencies []:
  - graphql-language-service-server@2.7.20

## 0.4.2

### Patch Changes

- [`c36504a8`](https://github.com/graphql/graphiql/commit/c36504a804d8cc54a5136340152999b4a1a2c69f) Thanks [@acao](https://github.com/acao)! - - upgrade `graphql-config` to latest in server
  - remove `graphql-config` dependency from `vscode-graphql` and `graphql-language-service`
  - fix `vscode-graphql` esbuild bundling bug in `vscode-graphql` [#2269](https://github.com/graphql/graphiql/issues/2269) by fixing `esbuild` version
- Updated dependencies [[`c36504a8`](https://github.com/graphql/graphiql/commit/c36504a804d8cc54a5136340152999b4a1a2c69f)]:
  - graphql-language-service-server@2.7.19

## 0.4.0

### Minor Changes

- [#2276](https://github.com/graphql/graphiql/pull/2276) [`6973a20b`](https://github.com/graphql/graphiql/commit/6973a20bcd12a599acca7c5d6671ac49def2768c) Thanks [@acao](https://github.com/acao)! - Simplified, merged with monorepo, dropped operation execution feature, we will recommend an alternative instead.

### Patch Changes

- Updated dependencies [[`e15d1dae`](https://github.com/graphql/graphiql/commit/e15d1dae399a7d43d8d98f2ce431a9a1f0ba84ae)]:
  - graphql-language-service-server@2.7.18

## 0.3.52

### Patch Changes

- [#452](https://github.com/graphql/vscode-graphql/pull/452) [`8878e42`](https://github.com/graphql/vscode-graphql/commit/8878e428c83eed4f53510f9071e9964f48b5d214) Thanks [@acao](https://github.com/acao)! - Limit activation events for package.json file provided `graphql-config`

## 0.3.50

### Patch Changes

- [#448](https://github.com/graphql/vscode-graphql/pull/448) [`f894dad`](https://github.com/graphql/vscode-graphql/commit/f894daddfe7382f7eb8e9c921c54904255a3557c) Thanks [@acao](https://github.com/acao)! - upgrade graphql-language-service-server to the latest patch version for windows path fix

* [#436](https://github.com/graphql/vscode-graphql/pull/436) [`2370607`](https://github.com/graphql/vscode-graphql/commit/23706071c6338c05e951783a3e7dfd5000da6d02) Thanks [@orta](https://github.com/orta)! - Adds support for making clicking on the graphql status item show the output channel

- [#277](https://github.com/graphql/vscode-graphql/pull/277) [`6017872`](https://github.com/graphql/vscode-graphql/commit/6017872b7f19ef5c3fcad404fca9ffd5b8ba5d87) Thanks [@AumyF](https://github.com/AumyF)! - provide 'Execute Query' for `/* GraphQL */` templates

* [#422](https://github.com/graphql/vscode-graphql/pull/422) [`0e2235d`](https://github.com/graphql/vscode-graphql/commit/0e2235d7fa229b78fb330c337d14fabf679884c2) Thanks [@orta](https://github.com/orta)! - Use the vscode theme API to set the right colours for the status bar item

## 0.3.48

### Patch Changes

- [#402](https://github.com/graphql/vscode-graphql/pull/402) [`a97e5df`](https://github.com/graphql/vscode-graphql/commit/a97e5df9933dfc79b06e5202c84216cfe2d5f865) Thanks [@acao](https://github.com/acao)! - thanks @markusjwetzel! Add directive highlighting for type system directives. [https://github.com/graphql/vscode-graphql/pull/326](https://github.com/graphql/vscode-graphql/pull/326)

## 0.3.43

### Patch Changes

- [#391](https://github.com/graphql/vscode-graphql/pull/391) [`6be5593`](https://github.com/graphql/vscode-graphql/commit/6be5593a45a4629f3438f59223ecb04949cb48d2) Thanks [@acao](https://github.com/acao)! - LSP upgrades:

  - bugfix for `insertText` & completion on invalid list types
  - add support for template strings and tags with replacement expressions, so strings like these should work now:

  ```ts
  const = /*GraphiQL*/
      `
          ${myFragments}
          query MyQuery {
              something
              ${anotherString}
          }

      `
  ```

  ```ts
  const = gql`
          ${myFragments}
          query MyQuery {
              something
              ${anotherString}
          }

      `
  ```

All notable changes to the "vscode-graphql" extension will be manually documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

The git log should show a fairly clean view of each of these new versions, and the issues/PRs associated.

# 0.3.25

Remove `node_modules` from bundle after adding `esbuild` to make the extension bundle smaller

# 0.3.24

Add highlighting and language support for `.mjs`, `.cjs`, `.es6`, `.esm` and other similar extensions

# 0.3.23

Major bugfixes for language features. Most bugs with language features not working should be resolved.

The `useSchemaFileDefinition` setting was deprecated, and SDL-driven projects work by default. If you want to opt-into an experimental feature to cache graphql-config schema result for definitions (useful for remote schemas), consult the readme on how to configure `cacheSchemaFileForLookup` option in vscode settings, or graphql config (yes you can enable/disable it per-project!)

Definition lookup works by default with SDL file schemas. `cacheSchemaFileForLookup` must be enabled if you have a remote schema want definition lookup for input types, etc in queries

# 0.3.19

- support `graphql-config` for `.ts` and `.toml` files by upgrading `graphql-config` & `graphql-language-service-server`
- use `*` activation event, because `graphql-config` in `package.json` is impossible to detect otherwise using vscode `activationEvents`
- support additional language features in `graphql-language-service-server` such as interface implements interfaces, etc
- upgrade operation execution to use a new graphql client and support subscriptions
- fix openvsx & vscode publish by re-creating PATs and signing new agreements

Note: there are still some known bugs in the language server we will be fixing soon:

- if you don't see editor output, please check your config
- output channel may show errors even after your configuration works
- there may be issues with schema file loading

# 0.3.13

LSP bugfixes:

- [streaming interface bug](https://github.com/graphql/graphiql/blob/main/packages/graphql-language-service-server/CHANGELOG.md#256-2020-11-28)
- bugfixes for windows filepaths in LSP server

# 0.3.8

- require `dotenv` in the server runtime (for loading graphql config values), and allow a `graphql-config.dotEnvPath` configuration to specify specific paths
- reload server on workspace configuration changes
- reload sever-side `graphql-config` and language service on config file changes. definitions cache/etc will be rebuilt
  - note: client not configured to reload on graphql config changes yet (i.e endpoints)
- accept all `graphql-config.loadConfig()` options

# 0.3.7

- update underlying `graphql-language-service-server` to allow .gql, .graphqls extensions

# 0.3.6

- documentation fix

# 0.3.5

- readme documentation improvements, more examples, FAQ, known issues
- bump `graphql-language-service-server` to allow implicit fragment completion (non-inline fragments). just include your fragments file or string in the graphql-config `documents`

# 0.3.4

- remove insiders announcement until tooling is properly in place, and insiders extension is up to date

# 0.3.3

- `useSchemaFileDefinition` setting

# 0.3.2

- #213: bugfix for input validation on operation execution

# 0.3.1 🎉

- upgrade to `graphql-config@3`
- upgrade to latest major version of `graphql-language-service-server`
  - upgrades `graphql-config@3`
  - remove watchman dependency 🎉
  - introduce workspace symbol lookup, outline
  - validation and completion for input variables
  - generate a schema output by default, for code-first schemas. SDL first schemas have an override option now

## Historical 0.2.x versions

[todo]
