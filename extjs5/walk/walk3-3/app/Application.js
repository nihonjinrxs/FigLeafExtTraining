/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('PatientChart.Application', {
	extend: 'Ext.app.Application',

	name: 'PatientChart',

	requires: [
		'PatientChart.view.viewport.Viewport',
		'PatientChart.AppDefaults'
	],

	stores: [
		// TODO: add global / shared stores here
	],

	launch: function() {
		Ext.create('PatientChart.view.viewport.Viewport');
	}
});