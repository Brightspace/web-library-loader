'use strict';

var path = require('path'),
	webLibraryLoader = require('../');

var dataPath = path.join( __dirname, 'data' );

describe( 'Web Library Loader', function() {

	var oldEnv;

	beforeEach( function() {
		oldEnv = process.env.CONFIG_PATH;
		process.env.CONFIG_PATH = path.join( dataPath, 'config' );
	} );

	afterEach( function() {
		process.env.CONFIG_PATH = oldEnv;
	} );

	it( 'should load jquery', function( done ) {

		webLibraryLoader.jquery()
			.then( function( file ) {
				expect( file ).toBe( 'https://mycdn.com/jquery/jquery.js' );
				done();
			} );

	} );

	it( 'should load jquery-ui', function( done ) {

		webLibraryLoader.jqueryui()
			.then( function( file ) {
				expect( file ).toBe( 'https://mycdn.com/jqueryui/jquery-ui.js' );
				done();
			} );

	} );

	it( 'should load valence-ui', function( done ) {

		webLibraryLoader.valenceui()
			.then( function( file ) {
				expect( file ).toBe( 'https://mycdn.com/vui/1.0/valenceui.js' );
				done();
			} );

	} );

} );
