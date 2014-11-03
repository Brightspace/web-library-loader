'use strict';

var configViewer = require('../lib/configViewer'),
	path = require('path');

var dataPath = path.join( __dirname, 'data' );
var opts = { configPath: path.join( dataPath, 'config' ) };

describe( 'Config Viewer', function() {

	var oldEnv;

	beforeEach( function() {
		oldEnv = process.env.CONFIG_PATH;
	} );

	afterEach( function() {
		process.env.CONFIG_PATH = oldEnv;
	} );

	it( 'should load existing config', function( done ) {
		configViewer.readConfig( 'test1', opts )
			.then( function( value ) {
				expect( value ).toEqual( { foo: "bar" } );
				done();
			} );
	} );

	it( 'should throw if config path does not exist', function( done ) {
		configViewer.readConfig(
			 	'doesnotexist',
				{ configPath: path.join( dataPath, 'doesnotexist' ) }
			)
			.fail( function( err ) {
				expect( err ).not.toBeNull();
				done();
			} );
	} );

	it( 'should throw if config file does not exist', function( done ) {
		configViewer.readConfig( 'doesnotexist', opts )
			.fail( function( err ) {
				expect( err ).not.toBeNull();
				done();
			} );
	} );

	it( 'should use CONFIG_PATH if no option specified', function( done ) {
		process.env.CONFIG_PATH = opts.configPath;
		configViewer.readConfig( 'test1' )
			.then( function( value ) {
				expect( value ).toEqual( { foo: "bar" } );
				done();
			} );
	} );

} );
