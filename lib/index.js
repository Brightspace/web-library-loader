'use strict';

var configViewer = require('./configViewer');

module.exports.jquery = function( opts ) {
	return configViewer.readConfig( 'D2L.LP.Web.UI.Html.jQuery', opts )
		.then( function( value ) {
				return value['jquery-location'];
		} );
};

module.exports.jqueryui = function( opts ) {
	return configViewer.readConfig( 'D2L.LP.Web.UI.Html.jQuery', opts )
		.then( function( value ) {
			return value['jqueryui-location'];
		} );
};

module.exports.valenceui = function( opts ) {
	return configViewer.readConfig( 'D2L.LP.Web.UI.Html.Vui', opts )
		.then( function( value ) {
				return value.baseLocation + 'valenceui.js';
		} );
};
