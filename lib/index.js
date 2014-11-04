'use strict';

var configViewer = require('./configViewer');

module.exports.jquery = function( opts ) {
	return configViewer.readConfig( 'D2L.LP.Web.UI.Html.jQuery', opts )
		.then( function( value ) {
				return value.jqueryBaseLocation + 'jquery.js';
		} );
};

module.exports.jqueryui = function( opts ) {
	return configViewer.readConfig( 'D2L.LP.Web.UI.Html.jQuery', opts )
		.then( function( value ) {
			return value.jqueryUIBaseLocation + 'jquery-ui.js';
		} );
};

module.exports.valenceui = function( opts ) {
	return configViewer.readConfig( 'D2L.LP.Web.UI.Html.Vui', opts )
		.then( function( value ) {
				return value.baseLocation + 'valenceui.js';
		} );
};
