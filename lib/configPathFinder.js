'use strict';

var fs = require('q-io/fs'),
	path = require('path'),
	Q = require('q');

module.exports = function() {

	var deferred = Q.defer();

	var configPath = process.env.CONFIG_PATH;
	if( configPath === undefined || configPath === null || configPath.length === 0 ) {
		deferred.reject(
				new Error( 'Missing environment variable CONFIG_PATH' )
			);
	}

	fs.exists( configPath )
		.then( function( exists ) {
			if( !exists ) {
				deferred.reject(
						new Error( 'CONFIG_PATH does not exist:' + configPath )
					);
			}
			deferred.resolve( configPath );
		} );

	return deferred.promise;

};
