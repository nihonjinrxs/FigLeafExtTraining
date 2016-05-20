Ext.define('PatientChart.view.admin.allergies.AllergiesController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.admin-allergies-allergies',

	onRowEditingEdit: function(editor, context, eventOptions) {
		var rec = context.record;
		rec.save({
			success: function(record, operation) {
				if (operation.action === 'create') {
					var res = operation.getResponse().responseText;
					var pk = Ext.decode(res).id;
					record.set('id', pk)
				}
				record.set('updatedate', new Date());
				record.set('updateuser', PatientChart.credentials.username);
				record.commit();
			},
			failure: function(record, operation) {
				Ext.Msg.alert(
					"Operation Failed",
					"Please try again later"
				);
			}
		});
	},
	onRowEditingCancelEdit: function(editor, context, eventOptions) {
		var rec = context.record;
		if (rec.phantom) {
			context.grid.getStore().remove(rec);
		}
	},
	onAddRecord: function(tool, event, owner, eventOptions) {
		var grid = this.lookupReference('grid');
		var gridStore = grid.getStore();
		var rec = Ext.create(gridStore.model, {text: ''});
		var rowEditor = grid.editingPlugin;
		rowEditor.cancelEdit();
		gridStore.insert(0, rec);
		rowEditor.startEdit(rec, 0);
	}
});