'use strict';

var configPathFinder = require('./configPathFinder'),
	fs = require('q-io/fs'),
	path = require('path');

module.exports.readConfig = function( name ) {

	return configPathFinder( __dirname )
		.then( function( configPath ) {

			var filePath = path.join(
				 	configPath,
					'Infrastructure',
					name + '.config.json'
				);
			return fs.exists( filePath )
				.then( function( exists ) {
					if( !exists ) {
						throw new Error( 'Config not found: ' + filePath );
					}
					return fs.read( filePath )
						.then( function( value ) {
							return JSON.parse( value );
						} );
				} );

		} );

};
