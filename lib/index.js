'use strict';

var configViewer = require('./configViewer');

var jQueryName = 'D2L.LP.Web.UI.Html.jQuery';
var vuiName = 'D2L.LP.Web.UI.Html.Vui';

module.exports.jquery = function( opts ) {
	return configViewer.readConfig( jQueryName, opts )
		.then( function( value ) {
				return value.jqueryBaseLocation + 'jquery.js';
		} );
};

module.exports.jqueryui = function( opts ) {
	return configViewer.readConfig( jQueryName, opts )
		.then( function( value ) {
			return value.jqueryUIBaseLocation + 'jquery-ui.js';
		} );
};

module.exports.valenceui = function( opts ) {
	return configViewer.readConfig( vuiName, opts )
		.then( function( value ) {
				return value.baseLocation + 'valenceui.js';
		} );
};

module.exports.jquerySync = function( opts ) {
	return configViewer.readConfigSync( jQueryName, opts ).jqueryBaseLocation + 'jquery.js';
};

module.exports.jqueryuiSync = function( opts ) {
	return configViewer.readConfigSync( jQueryName, opts ).jqueryUIBaseLocation + 'jquery-ui.js';
};

module.exports.valenceuiSync = function( opts ) {
	return configViewer.readConfigSync( vuiName, opts ).baseLocation + 'valenceui.js';
};
