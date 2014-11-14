'use strict';

var configViewer = require('../lib/configViewer'),
	path = require('path');

var dataPath = path.join( __dirname, 'data' );
var opts = { configPath: path.join( dataPath, 'config' ) };

describe( 'Config Viewer (Asynchronous)', function() {

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

	it( 'should throw if config is not passed in', function( done ) {
		configViewer.readConfig( 'doesnotexist' )
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

} );

describe( 'Config Viewer (Synchronous)', function() {

	it( 'should load existing config', function() {
		expect(
				configViewer.readConfigSync( 'test1', opts )
			).toEqual( { foo: "bar" } );
	} );

	it( 'should throw if config path does not exist', function() {
		expect( function() {
				configViewer.readConfigSync(
					 	'doesnotexist',
						{ configPath: path.join( dataPath, 'doesnotexist' ) }
					);
			}).toThrow();
	} );

	it( 'should throw if config is not passed in', function() {
		expect( function() {
				configViewer.readConfigSync( 'doesnotexist' );
			}).toThrow();
	} );

	it( 'should throw if config file does not exist', function() {
		expect( function() {
				configViewer.readConfigSync( 'doesnotexist', opts );
			}).toThrow();
	} );

} );
