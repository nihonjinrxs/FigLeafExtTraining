Ext.define("PatientChart.view.viewport.Navigation", {
	extend: "Ext.panel.Panel",
	requires: [
		'PatientChart.view.viewport.NavigationController',
		'Ext.button.Button',
		'Ext.button.Split',
		'Ext.menu.Menu',
		'Ext.menu.Item',
		'Ext.ux.BoxReorderer'
	],

	controller: "viewport-navigation",
	alias: 'widget.mainnavbar',

	plugins: Ext.create('Ext.ux.BoxReorderer', {
		listeners: {
			'Drop': function(plugin, container) {
				container.fireEvent('drop');
			}
		}
	}),

	stateful: true,
	stateId: 'mainnavbar',

	stateEvents: [ 'drop' ],

	getState: function() {
		var panelState = this.callParent(arguments);
		Ext.apply(panelState, {
			itemOrder: Ext.Array.pluck(this.items.items, 'itemId')
		});
		return panelState;
	},

	applyState: function(state) {
		this.callParent(arguments);
		var buttonOrder = state.itemOrder;
		var lastItem = null;
		if (buttonOrder) {
			for (var i = 0; i < buttonOrder.length; i++) {
				var cmp = this.down('#' + buttonOrder[i]);
				this.moveBefore(cmp, lastItem);
				lastItem = cmp;
			}
		}
	},

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

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		style: {
			'border-top-width': '1px !important'
		},
		items: [{
			xtype: 'tbtext',
			flex: 1,
			style: {
				'text-align': 'center',

			},
			bind: {
				text: '{userName}'
			}
		}]
	}],

	items: [{
			xtype: 'component',
			width: 150,
			height: 133,
			cls: 'drextlogo',
			itemId: 'drextlogo'
		},

		{
			text: 'Administer',
			iconCls: 'btnAdminIcon',
			itemId: 'btnAdminperspective',
			bind: {
				disabled: '{!isAdmin}'
			},
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
				}, {
					xtype: 'menuseparator'
				}, {
					text: 'Edit User Accounts',
					itemId: 'editusers',
					iconCls: 'users'
				}],
				listeners: {
					click: 'onAdminMenuItemClick'
				}
			},
			listeners: {
				click: 'onAdminPerspectiveClick',
				arrowclick: 'onAdminPerspectiveClick'
			}
		}, {

			text: 'Patients',
			itemId: 'btnPatientinfoperspective',
			iconCls: 'btnPatientsIcon',
			bind: {
				disabled: '{!isAdmin}'
			},
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

		}, {

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
				}, {
					text: 'Hospital Procedures',
					iconCls: 'stethoscope',
					itemId: 'hospitalinfotreegrid'
				}],
				listeners: {
					click: 'onResearchMenuItemClick'
				}
			},
			listeners: {
				click: 'onResearchPerspectiveClick',
				arrowclick: 'onResearchPerspectiveClick'
			}
		}, {
			xtype: 'button',
			itemId: 'btnAbout',
			text: 'About',
			iconCls: 'btnAbout',
			listeners: {
				click: 'onAboutClick'
			},
			toggleGroup: null
		},
		// step 24
		{
			xtype: 'button',
			text: 'Log Out',
			iconCls: 'btnLogout',
			listeners: {
				click: 'onLogoutClick'
			},
			itemId: 'btnLogout'
		}
	]

});