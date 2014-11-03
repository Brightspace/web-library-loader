# web-library-loader
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

Utility to get locations of 3rd party libraries used by a D2L instance, such
as jQuery, jQuery UI and Valence UI.

## Installation

Install from NPM:

```shell
npm install web-library-loader
```

## Usage

```javascript
var webLibraryLoader = require('web-library-loader');

webLibraryLoader.jquery()
	.then( function( location ) {
		console.log( location );
	} ).fail( function( err ) {
		// configuration error
	} );

// same API for jqueryui and valenceui
webLibraryLoader.jqueryui()
	.then( ... );
webLibraryLoader.valenceui()
	.then( ... );
```

As you can see above, this library [makes use of promises](https://www.npmjs.org/package/q).

This library also requires that the `CONFIG_PATH` environment variable be set
to your `{instance}\config` directory.

## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and
contributions should make use of them.

[npm-url]: https://npmjs.org/package/web-library-loader
[npm-image]: https://badge.fury.io/js/web-library-loader.png
[ci-image]: https://travis-ci.org/Desire2Learn-Valence/web-library-loader.svg?branch=master
[ci-url]: https://travis-ci.org/Desire2Learn-Valence/web-library-loader
[coverage-image]: https://coveralls.io/repos/Desire2Learn-Valence/web-library-loader/badge.png?branch=master
[coverage-url]: https://coveralls.io/r/Desire2Learn-Valence/web-library-loader?branch=master
