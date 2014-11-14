'use strict';

var path = require('path'),
	webLibraryLoader = require('../');

var dataPath = path.join( __dirname, 'data' );
var opts = { configPath: path.join( dataPath, 'config' ) };

describe( 'Web Library Loader', function() {

	it( 'should load jquery (Asynchronous)', function( done ) {

		webLibraryLoader.jquery( opts )
			.then( function( file ) {
				expect( file ).toBe( 'https://mycdn.com/jquery/jquery.js' );
				done();
			} );

	} );

	it( 'should load jquery-ui (Asynchronous)', function( done ) {

		webLibraryLoader.jqueryui( opts )
			.then( function( file ) {
				expect( file ).toBe( 'https://mycdn.com/jqueryui/jquery-ui.js' );
				done();
			} );

	} );

	it( 'should load valence-ui (Asynchronous)', function( done ) {

		webLibraryLoader.valenceui( opts )
			.then( function( file ) {
				expect( file ).toBe( 'https://mycdn.com/vui/1.0/valenceui.js' );
				done();
			} );

	} );

} );

describe( 'Web Library Loader (Synchronous)', function() {

	it( 'should load jquery', function() {

		var file = webLibraryLoader.jquerySync( opts );
		expect( file ).toBe( 'https://mycdn.com/jquery/jquery.js' );

	} );

	it( 'should load jquery-ui', function() {

		var file = webLibraryLoader.jqueryuiSync( opts );
		expect( file ).toBe( 'https://mycdn.com/jqueryui/jquery-ui.js' );

	} );

	it( 'should load valence-ui', function() {

		var file = webLibraryLoader.valenceuiSync( opts );
		expect( file ).toBe( 'https://mycdn.com/vui/1.0/valenceui.js' );

	} );

} );
