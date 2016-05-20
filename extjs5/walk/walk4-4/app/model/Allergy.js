Ext.define('PatientChart.model.Allergy', {
    extend: 'Ext.data.Model',
    
    requires: [
    	'Ext.data.field.Integer',
    	'Ext.data.field.String',
    	'Ext.data.field.Date',
    	'Ext.data.proxy.Rest',
    	'Ext.data.reader.Json'
    ],

    fields: [
        { name: 'id', type: 'int' },
        { name: 'text', type: 'string' },
        { name: 'updateuser', type: 'string' },
        { name: 'updatedate', type: 'date', dateFormat: 'F, d Y H:i:s' }
    ],

    proxy: {
    	type: 'rest',
    	url: 'http://webapps.figleaf.com/rest/prototypes/allergies',
    	format: 'json',
    	withCredentials: true,
    	reader: {
    		type: 'json',
    		rootProperty: 'records'
    	}
    }
});
