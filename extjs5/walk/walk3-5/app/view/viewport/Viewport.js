Ext.define("PatientChart.view.viewport.Viewport", {
	extend: "Ext.container.Viewport",

	requires: [
		'PatientChart.view.viewport.ViewportController',
		'PatientChart.view.viewport.ViewportModel',
		'Ext.layout.container.Border',
		'PatientChart.view.viewport.Navigation'
	],

	controller: "viewport-viewport",
	viewModel: {
		type: "viewport-viewport"
	},

	layout: 'border',
	items: [{
		xtype: 'mainnavbar',
		collapsible: true,
		region: 'west',
		split: true,
		splitterResize: false
	}, {
		region: 'center',
		hideHeader: true,
		cls: 'appBackground'
	}]
});