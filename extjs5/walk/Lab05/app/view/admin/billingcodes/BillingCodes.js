Ext.define("PatientChart.view.admin.billingcodes.BillingCodes", {
	extend: "Ext.window.Window",
	alias: 'widget.billingcodes',
	requires: [
		'PatientChart.view.admin.billingcodes.BillingCodesModel',
		'PatientChart.view.admin.billingcodes.BillingCodesController'
	],

	controller: "admin-billingcodes-billingcodes",
	viewModel: {
		type: "admin-billingcodes-billingcodes"
	},

	constrain: true,
	width: 600,
	height: 300,
	layout: 'fit',
	title: 'Edit Billing Codes',

	tools: [{
		xtype: 'tool',
		type: 'plus',
		callback: 'onAddRecord'
	}, {
		xtype: 'tool',
		type: 'minus',
		callback: 'onDeleteRecords',
		bind: {
			disabled: '{!selectedRecord}'
		}
	}, {
		xtype: 'tool',
		type: 'refresh',
		callback: 'onRefresh'
	}],
	items: [{
		xtype: 'grid',
		bind: {
			selection: '{selectedRecord}'
		},
		header: false,
		store: 'BillingCodes',
		reference: 'grid',
		plugins: [{
			ptype: 'rowediting',
			listeners: {
				edit: 'onRowEditingEdit',
				canceledit: 'onRowEditingCancelEdit'
			}
		}],
		columns: [{
			xtype: 'gridcolumn',
			dataIndex: 'code',
			text: 'Code',
			flex: 1,
			editor: {
				xtype: 'textfield',
				allowBlank: false
			}
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'text',
			text: 'Label',
			flex: 2,
			editor: {
				xtype: 'textfield',
				allowBlank: false
			}
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'description',
			text: 'Description',
			flex: 4,
			editor: {
				xtype: 'textfield',
				allowBlank: false
			}
		}, {
			xtype: 'numbercolumn',
			dataIndex: 'fee',
			text: 'Fee',
			format: '0.00',
			align: 'right',
			flex: 1,
			editor: {
				xtype: 'numberfield',
				allowBlank: false
			}
		}]
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		height: 30,
		items: [{
			xtype: 'tbtext',
			flex: 1,
			reference: 'lastupdated',
			bind: {
				text: 'Updated: {grid.selection.updatedate:date(\'m/d/Y H:i a\')} by {grid.selection.updateuser}'
			}
		}]
	}]
});