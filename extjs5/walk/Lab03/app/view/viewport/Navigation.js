Ext.define("PatientChart.view.viewport.Navigation", {
	extend: "Ext.panel.Panel",
	requires: [
		'PatientChart.view.viewport.NavigationController',
		'Ext.button.Button',
		'Ext.button.Split',
		'Ext.menu.Menu',
		'Ext.menu.Item'
	],
	controller: "viewport-navigation",
	alias: 'widget.mainnavbar',

	width: 150,
	bodyPadding: 5,
	title: 'Navigate',
	header: false,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	defaults: {
		xtype: 'splitbutton',
		height: 45,
		margin: '0 0 10 0',
		toggleGroup: 'perspectives',
		allowDepress: false
	},
	items: [{
		text: 'Administer',
		iconCls: 'btnAdminIcon',
		itemId: 'btnAdminperspective',
		menu: {
			xtype: 'menu',
			width: 182,
			items: [{
				text: 'Allergies',
				iconCls: 'nose',
				itemId: 'allergies'
			}, {
				text: 'Pre-Existing Conditions',
				iconCls: 'bottleOfPills',
				itemId: 'preexistingconditions'
			}, {
				text: 'Billing Codes/Procedures',
				iconCls: 'medicalBag',
				itemId: 'billingcodes'
			}],
			listeners: {
				click: 'onAdminMenuItemClick'
			}
		},
		listeners: {
			click: 'onAdminPerspectiveClick',
			arrowclick: 'onAdminPerspectiveClick'
		}
	},
	{

		text: 'Patients',
		itemId: 'btnPatientinfoperspective',
		iconCls: 'btnPatientsIcon',
		menu: {
			width: 150,
			items: [{
				text: 'Search',
				iconCls: 'patientFind'
			}, {
				iconCls: 'patientAdd',
				text: 'Add New'
			}]
		},
		listeners: {
			click: 'onPatientPerspectiveClick',
			arrowclick: 'onPatientPerspectiveClick'
		}

	},
	{

		text: 'Research',
		itemId: 'btnResearchperspective',
		iconCls: 'btnResearchIcon',
		menu: {
			width: 150,
			items: [{
				text: 'Clinical Trials',
				iconCls: 'injection',
				itemId: 'clinicaltrialswindow'
			}, {
				text: 'Hospital Stats',
				iconCls: 'hospital',
				itemId: 'hospitalstatswindow'
			}],
			listeners: {
				click: 'onResearchMenuItemClick'
			}
		},
		listeners: {
			click: 'onResearchPerspectiveClick',
			arrowclick: 'onResearchPerspectiveClick'
		}
	},
	{
		xtype: 'button',
		text: 'About',
		iconCls: 'btnAbout',
		listeners: {
			click: 'onAboutClick'
		},
		toggleGroup: null
	}]

});