'use strict';

var configViewer = require('./configViewer');

module.exports.jquery = function() {
	return configViewer.readConfig('D2L.LP.Web.UI.Html.jQuery')
		.then( function( value ) {
				return value['jquery-location'];
		} );
};

module.exports.jqueryui = function() {
	return configViewer.readConfig('D2L.LP.Web.UI.Html.jQuery')
		.then( function( value ) {
			return value['jqueryui-location'];
		} );
};

module.exports.valenceui = function() {
	return configViewer.readConfig('D2L.LP.Web.UI.Html.Vui')
		.then( function( value ) {
				return value.baseLocation + 'valenceui.js';
		} );
};
