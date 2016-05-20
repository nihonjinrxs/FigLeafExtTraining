Ext.define('PatientChart.model.ClinicalTrial', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'string',
            name: 'nct_id'
        },
        {
            type: 'string',
            name: 'title'
        },
        {
            type: 'int',
            name: 'score'
        },
        {
            type: 'string',
            name: 'condition_summary'
        },
        {
            type: 'string',
            name: 'intervention_summary'
        },
        {
            type: 'string',
            name: 'status'
        },
        {
            type: 'string',
            name: 'url'
        },
        {
            type: 'int',
            name: 'order'
        },
        {
            type: 'date',
            name: 'last_changed',
            dateFormat: 'F d, Y'
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/clinicaltrial',
        format: 'json',
        withCredentials: true,
        reader: {
            type: 'json',
            rootProperty: 'ROWS',
            totalProperty: 'RESULTS',
            successProperty: 'SUCCESS'
        }
    }
});