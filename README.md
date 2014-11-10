# d2l-web-library-loader
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

Utility to get locations of 3rd party libraries used by a D2L instance, such
as jQuery, jQuery UI, and Valence UI.

## Installation

Install from NPM:

```shell
npm install web-library-loader
```

## Usage

```javascript
var webLibraryLoader = require('web-library-loader');

var opts = {
	configPath: '/path/to/instanceDir/config'
};

webLibraryLoader.jquery( opts )
	.then( function( location ) {
		console.log( location );
	} );

// same API for jqueryui and valenceui
webLibraryLoader.jqueryui( opts )
	.then( ... );
webLibraryLoader.valenceui( opts )
	.then( ... );
```

As you can see above, this library [makes use of promises](https://www.npmjs.org/package/q).

### Options
* configPath: Path to the `config` directory under the root of your instance.

## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and
contributions should make use of them.

[npm-url]: https://npmjs.org/package/d2l-web-library-loader
[npm-image]: https://badge.fury.io/js/d2l-web-library-loader.png
[ci-image]: https://travis-ci.org/Brightspace/web-library-loader.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/web-library-loader
[coverage-image]: https://coveralls.io/repos/Brightspace/web-library-loader/badge.png?branch=master
[coverage-url]: https://coveralls.io/r/Brightspace/web-library-loader?branch=master
