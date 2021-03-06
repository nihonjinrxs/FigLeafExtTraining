Ext.define('PatientChart.view.viewport.NavigationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.viewport-navigation',
	requires: [
		'PatientChart.view.about.About'
	],
	onAboutClick: function(button, event, eventOptions) {
		Ext.widget('about', {animateTarget: button});
	},

	onPatientPerspectiveClick: function() {
		this.redirectTo('patient/search');
	},

	onAdminPerspectiveClick: function() {
		this.redirectTo('admin');
	},

	onAdminMenuItemClick: function(menu, menuitem, event, eventOptions) {
		// xtype of view is stored in menuitem.itemId
		this.redirectTo('admin/' + menuitem.itemId)
	}
});