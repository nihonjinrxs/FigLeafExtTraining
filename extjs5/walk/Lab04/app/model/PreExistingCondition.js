Ext.define('PatientChart.model.PreExistingCondition', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.field.Integer',
		'Ext.data.field.String',
		'Ext.data.field.Date',
		'Ext.data.proxy.Rest',
		'Ext.data.reader.Json'
	],

	fields: [
		{ type: 'int', name: 'id' },
		{ type: 'string', name: 'text' },
		{ type: 'string', name: 'updateuser' },
		{ type: 'date', name: 'updatedate', dateFormat: 'F, d Y H:i:s' }
	],

	proxy: {
		type: 'rest',
		url: 'http://webapps.figleaf.com/rest/prototypes/preexistingcondition',
		format: 'json',
		withCredentials: true,
		reader: {
			type: 'json',
			rootProperty: 'records'
		}
	}
});