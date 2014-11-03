'use strict';

var fs = require('q-io/fs'),
	path = require('path');

module.exports.readConfig = function( name, opts ) {

	opts = opts || {};
	opts.configPath = opts.configPath || process.env.CONFIG_PATH;

	return fs.exists( opts.configPath )
		.then( function( exists ) {
			if( !exists ) {
				throw new Error( 'config path does not exist:' + opts.configPath );
			}
			return opts.configPath;
		} )
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
