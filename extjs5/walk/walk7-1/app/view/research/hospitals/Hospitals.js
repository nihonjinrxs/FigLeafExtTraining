Ext.define("PatientChart.view.research.hospitals.Hospitals", {
	extend: "Ext.window.Window",
	alias: 'widget.hospitalstatswindow',
	requires: [
		'PatientChart.view.research.hospitals.HospitalsController',
		'PatientChart.view.research.hospitals.HospitalsModel',
		'Ext.tree.Panel',
		'Ext.tree.View'
	],
	controller: "research-hospitals-hospitals",
	viewModel: {
		type: "research-hospitals-hospitals"
	},
	
	layout: 'border',
	constrain: true,
	maximizable: true,
	autoShow: true,
	height: 475,
	width: 1000,
	title: 'Hospital Treatment Costs per Diagnosis',

	items: [
		{
			xtype: 'panel',
			region: 'west',
			split: true,
			weight: 50,
			width: 200,
			layout: 'accordion',
			collapsible: true,
			header: false,
			title: 'Filter',
			items: [
				{
					xtype: 'treepanel',
					title: 'By State',
					rootVisible: false,
					useArrows: true,
					reference: 'statefiltertree',
					bind: {
						store: '{StateFilters}'
					}
				}
			]
		}
	]

});