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

	updateCurrentPerspective: function(newPerspective, oldPerspective) {
		if (newPerspective != oldPerspective) {
			if (this.getCenterRegion()) {
				this.getCenterRegion().destroy();
			}
			this.getViewport().add({
				xtype: newPerspective,
				region: 'center'
			});
		}
		this.getNavButtons()
			.down('#btn' + Ext.String.capitalize(newPerspective))
			.setPressed(true);
	},

	onPatientSearch: function() {
		this.setCurrentPerspective('patientinfoperspective');
	}
});