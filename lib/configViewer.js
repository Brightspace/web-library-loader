'use strict';

var fs = require('fs'),
	qfs = require('q-io/fs'),
	path = require('path');

var getFilePath = function( name, configPath ) {
	return path.join(
			configPath,
			'Infrastructure',
			name + '.config.json'
		);
};

var readConfig = function( name, opts ) {

	opts = opts || {};

	return qfs.exists( opts.configPath )
		.then( function( exists ) {
			if( !exists ) {
				throw new Error( 'config path does not exist:' + opts.configPath );
			}
			return opts.configPath;
		} )
		.then( function( configPath ) {
			var filePath = getFilePath(	name, configPath );
			return qfs.exists( filePath )
				.then( function( exists ) {
					if( !exists ) {
						throw new Error( 'config file not found: ' + filePath );
					}
					return qfs.read( filePath );
				} )
				.then( JSON.parse );
		} );

};

var readConfigSync = function( name, opts ) {

	opts = opts || {};

	if( !fs.existsSync( opts.configPath ) ) {
		throw new Error( 'config path does not exist:' + opts.configPath );
	}

	var filePath = getFilePath( name, opts.configPath );

	if( !fs.existsSync( filePath )) {
		throw new Error( 'config file not found: ' + filePath );
	}

	return JSON.parse( fs.readFileSync( filePath, { encoding : "UTF-8" } ) );

};

module.exports.readConfig = readConfig;
module.exports.readConfigSync = readConfigSync;
