'use strict';

var configPathFinder = require('../lib/configPathFinder'),
	path = require('path');

var dataPath = path.join( __dirname, 'data' );

describe( 'Config Path Finder', function() {

	var oldEnv;

	beforeEach( function() {
		oldEnv = process.env.CONFIG_PATH;
	} );

	afterEach( function() {
		process.env.CONFIG_PATH = oldEnv;
	} );

	it( 'should throw an exception if no ENV variable set', function( done ) {
		process.env.CONFIG_PATH = '';
		configPathFinder( dataPath )
			.fail( function( err ) {
				expect( err ).not.toBeNull();
				done();
			} );
	} );

	it( 'should use ENV variable as config path', function( done ) {
		process.env.CONFIG_PATH = path.join( dataPath, 'config' );
		configPathFinder( dataPath )
			.then( function( configPath ) {
				expect( configPath ).toBe( path.join( dataPath, 'config' ) );
				done();
			} );
	} );

	it( 'should throw when ENV variable path does not exist', function( done ) {
		process.env.CONFIG_PATH = path.join( dataPath, 'doesnotexist' );
		configPathFinder( dataPath )
			.fail( function( err ) {
				expect( err ).not.toBeNull();
				done();
			} );
	} );

} );
