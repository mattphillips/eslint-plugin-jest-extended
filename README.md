<div align="center">
  <h1>eslint-plugin-jest-extended</h1>

  ESLint plugin for jest-extended matchers

  <a href="https://eslint.org/">
    <img width="150" height="150" src="https://eslint.org/img/logo.svg">
  </a>
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest.svg">
  </a>
  <a href="https://github.com/jest-community/jest-extended">
    <img width="150" height="150" src="https://camo.githubusercontent.com/b68d547b27824d6522a5f2fe80f0d25364204b45/68747470733a2f2f656d6f6a6970656469612d75732e73332e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f6170706c652f3131342f666c657865642d6269636570735f31663461612e706e67">
  </a>
</div>

<hr />

[![Build Status](https://img.shields.io/travis/mattphillips/eslint-plugin-jest-extended.svg?style=flat-square)](https://travis-ci.org/mattphillips/eslint-plugin-jest-extended)
[![Code Coverage](https://img.shields.io/codecov/c/github/mattphillips/eslint-plugin-jest-extended.svg?style=flat-square)](https://codecov.io/github/mattphillips/eslint-plugin-jest-extended)
[![version](https://img.shields.io/npm/v/eslint-plugin-jest-extended.svg?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-jest-extended)
[![downloads](https://img.shields.io/npm/dm/eslint-plugin-jest-extended.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-plugin-jest-extended&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/eslint-plugin-jest-extended.svg?style=flat-square)](https://github.com/mattphillips/eslint-plugin-jest-extended/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](https://github.com/mattphillips/eslint-plugin-jest-extended/blob/master/docs/ROADMAP.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/mattphillips/eslint-plugin-jest-extended/blob/master/docs/EXAMPLES.md)

## Problem

[jest-extended](https://github.com/jest-community/jest-extended) adds many additional matchers to
[Jest's](https://facebook.github.io/jest/) default assertions but knowing when to use these matchers isn't always
obvious.

## Solution

`eslint-plugin-jest-extended` aims to tell you when you should use a specific matcher available in `jest-extended`.

## Installation

With npm:
```sh
npm install --save-dev eslint-plugin-jest-extended
```

With yarn:
```sh
yarn add -D eslint-plugin-jest-extended
```

## Usage

### Plugin

Add jest-extended to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["jest-extended"]
}
```

See [ESLint plugin](https://eslint.org/docs/user-guide/configuring#configuring-plugins) documentation for more
information about using plugins.

### Recommended configuration

Add jest-extended to the extends section of your `.eslintrc` configuration file to use the recommended setup.

```json
{
  "extends": ["plugin:jest-extended/recommended"]
}
```

See [ESLint configuration](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) documentation
for more information about extending configuration files.

### Rules

Add rules to your `.eslintrc` configuration file to either use a rule or override the default configuration if you are
using the recommended setup.

See [ESLint rules](https://eslint.org/docs/user-guide/configuring#configuring-rules) documentation for more information
about adjusting rule settings.

```json
{
  "rules": {
    "jest-extended/prefer-to-be-true": "warn",
    "jest-extended/prefer-to-be-false": "error"
  }
}
```

## Inspiration

 - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/5610087?v=4" width="100px;"/><br /><sub><b>Matt Phillips</b></sub>](http://mattphillips.io)<br />[💻](https://github.com/mattphillips/eslint-plugin-jest-extended/commits?author=mattphillips "Code") [💡](#example-mattphillips "Examples") [🚇](#infra-mattphillips "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/mattphillips/eslint-plugin-jest-extended/commits?author=mattphillips "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

[MIT](/LICENSE)
