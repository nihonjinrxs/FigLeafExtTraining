Ext.define('PatientChart.view.viewport.NavigationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.viewport-navigation',
	requires: [
		'PatientChart.view.about.About'
	],
	// Event handlers
	onAboutClick: function(button, event, eventOpts) {
		Ext.widget('about');
	}

});