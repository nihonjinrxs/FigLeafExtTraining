Ext.define('PatientChart.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		currentPerspective: null
	},

	requires: [
		"Ext.app.route.Route"
	],

	refs: {
		centerRegion: 'viewport > panel[region=center]',
		navButtons: 'mainnavbar',
		viewport: 'viewport'
	},

	routes: {
		'patient/search': {
			action: 'onPatientSearch'
		}
	},

	onPatientSearch: function() {
		this.setCurrentPerspective('patientinfoperspective');
	}
});