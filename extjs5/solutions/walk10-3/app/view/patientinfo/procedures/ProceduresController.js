Ext.define('PatientChart.view.patientinfo.procedures.ProceduresController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.patientprocedures',


	onSaveForm: function(form, tool) {
		form.submit({
			clientValidation: true,
			url: 'http://webapps.figleaf.com/webservices/savepatientprocedure.cfm',
			success: function(form, response) {
				Ext.Msg.alert('Success', response.result.msg);
				debugger;
				this.getViewModel().get('selectedProcedure').commit();
			},
			scope: this,
			failure: function(form, error) {

				switch (error.failureType) {
					case Ext.form.action.Action.CLIENT_INVALID:
						Ext.Msg.alert('Failure', 'Form has invalid values');
						break;
					case Ext.form.action.Action.CONNECT_FAILURE:
						Ext.Msg.alert('Failure', 'Communication failed');
						break;
					case Ext.form.action.Action.SERVER_INVALID:
						Ext.Msg.alert('Failure', error.result.msg);
				}
			}
		});
	},

	onBillingCodeSelect: function(combo, record, eOpts) {

		var rec = this.getViewModel().get('selectedProcedure');
		rec.set({
			'code': record.get('code'),
			'text': record.get('text'),
			'procedureText': record.get('code') + ' - ' + record.get('text'),
			'description': record.get('description'),
			'fee': record.get('fee')
		});
	},


	onAddRecord: function(grid, tool, e) {

		var gridStore = grid.getStore();

		var rec = Ext.create('PatientChart.model.PatientVisit', {
			date: new Date(),
			patientId: this.getViewModel().get('patient').get('id')
		});

		var rowEditor = grid.editingPlugin;
		rowEditor.cancelEdit();
		gridStore.insert(0, rec);
		rowEditor.startEdit(rec, 1);

	},

	onDelRecord: function(grid, tool, e) {
		Ext.Msg.confirm(
			"Delete Record",
			"Are you sure that you want to delete the selected record?",
			function(b) {
				if (b == 'yes') {
					this.getViewModel().get('selectedProcedure').erase({
						success: function(record, operation) {
							this.getViewModel().set('selectedProcedure', null);
						},
						failure: function(record, operation) {
							Ext.Msg.alert('Operation failed', "Please try again later.");
							console.log(arguments);
						}
					})

				}
			},
			this
		);
	},

	onRowEditingEdit: function(editor, context, eOpts) {
		var rec = context.record;

		rec.save({
			success: function(record, operation) {
				if (operation.action == 'create') {
					var pk = Ext.decode(operation.getResponse().responseText).id;
					record.set('id', pk);
					record.set('updatedate', new Date());
				}
				record.commit();
			},
			failure: function(record, operation) {
				Ext.Msg.alert('Operation failed', "Please try again later.");
				console.log(arguments);
			}
		});
	},

	onRowEditingCancelEdit: function(editor, context, eOpts) {
		var rec = context.record;
		if (rec.phantom) {
			context.grid.getStore().remove(rec);
			this.getViewModel().set('selectedProcedure', null);
		}
	},

	onRefresh: function(grid, tool) {
		var gridStore = grid.getStore();
		var rowEditor = grid.editingPlugin;
		rowEditor.cancelEdit();
		gridStore.load();
		this.getViewModel().set('selectedProcedure', null);
	}

});