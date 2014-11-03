'use strict';

var configViewer = require('../lib/configViewer'),
	path = require('path');

var dataPath = path.join( __dirname, 'data' );

describe( 'Config Viewer', function() {

	var oldEnv;

	beforeEach( function() {
		oldEnv = process.env.CONFIG_PATH;
		process.env.CONFIG_PATH = path.join( dataPath, 'config' );
	} );

	afterEach( function() {
		process.env.CONFIG_PATH = oldEnv;
	} );

	it( 'should load existing config', function( done ) {
		configViewer.readConfig('test1')
			.then( function( value ) {
				expect( value ).toEqual( { foo: "bar" } );
				done();
			} );
	} );

	it( 'should throw if config does not exist', function( done ) {
		configViewer.readConfig('doesnotexist')
			.fail( function( err ) {
				expect( err ).not.toBeNull();
				done();
			} );
	} );

} );
