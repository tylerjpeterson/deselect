# deselect
> Returns a selector that excludes all passed selectors

![100% test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

## Installation

Install via npm:

```sh
$ npm i no-select
```


## Usage

```js
var deselect = require('deselect');

deselect(['p','a','h2']);
// returns *:not(p),*:not(a),*:not(h2)

deselect('p');
// returns *:not(p)

deselect();
// returns ''

deselect('p,a,h2');
// returns *:not(p),*:not(a),*:not(h2)

```
