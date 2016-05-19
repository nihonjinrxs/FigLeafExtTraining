Ext.define('PatientChart.view.viewport.NavigationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.viewport-navigation',
	requires: [
		'PatientChart.view.about.About'
	],
	onAboutClick: function(b, e, eOpts) {
		Ext.widget('about', {
			animateTarget: b
		});
	},

	onPatientPerspectiveClick: function() {
		this.redirectTo('patient/search');
	},

	onAdminPerspectiveClick: function() {
		this.redirectTo('admin');
	},

	onAdminMenuItemClick: function(menu, menuitem, e, eOpts) {
		this.redirectTo('admin/' + menuitem.itemId);
	},

	onResearchPerspectiveClick: function() {
		this.redirectTo('research');
	},

	onResearchMenuItemClick: function(menu, menuitem, e, eOpts) {
		this.redirectTo('research/' + menuitem.itemId);
	}
});