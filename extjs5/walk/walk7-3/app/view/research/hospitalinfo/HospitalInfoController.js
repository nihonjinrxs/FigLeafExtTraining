Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfoController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.research-hospitalinfo-hospitalinfo',

	showDetails: function(grid, record, item, index, event, eventOptions) {
		console.log(record, record.$className);
	}

});