Ext.define("PatientChart.view.patientinfo.Chooser", {
	extend: "Ext.window.Window",
	requires: [
		"PatientChart.view.patientinfo.ChooserController",
		"Ext.grid.Panel"
	],
	controller: "patientinfo-chooser",
	alias: 'widget.patientsearchwindow',
	width: 700,
	height: 400,
	title: 'Select a Patient',
	items: [{
		xtype: 'gridpanel',
		header: false,
		title: 'Patients',
		bind: {
			store: '{Patients}'
		},
		listeners: {
			itemdblclick: 'onPatientSelect'
		},
		columns: [{
			xtype: 'rownumberer'
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'lastname',
			text: 'Last Name'
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'firstname',
			text: 'First Name'
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'address',
			text: 'Address',
			flex: 1
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'email',
			text: 'E-mail',
			width: 150,
			renderer: function(value) {
				var out = Ext.String.format('<a href="mailto:{0}" target="_blank">{0}</a>', value);
				return out;
			}
		}, {
			xtype: 'actioncolumn',
			width: 30,
			menuDisabled: true,
			items: [{
				icon: 'resources/images/document_edit.png',
				tooltip: 'Edit',
				handler: function(grid, rowIndex, colIndex, item, e,
					record, row) {
					grid.fireEvent('itemdblclick', grid, record, item);
				}
			}]
		}],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'top',
			height: 40,
			items: [{
				xtype: 'textfield',
				flex: 1,
				fieldLabel: 'Search',
				emptyText: 'Enter first few letters of last name',
				labelWidth: 50,
				listeners: {
					'change': {
						fn: 'onSearchFieldChange',
						buffer: 250
					}
				}
			}]
		}]
	}]
});