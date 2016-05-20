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
	}
	
});