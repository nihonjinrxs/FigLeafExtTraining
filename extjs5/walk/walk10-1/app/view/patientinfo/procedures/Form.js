
Ext.define("PatientChart.view.patientinfo.procedures.Form",{
    extend: "Ext.form.Panel",
    alias: 'widget.patientprocedureform',

    requires: [
    	'Ext.layout.container.Column',
    	'Ext.form.field.Date',
    	'Ext.form.field.Number',
    	'Ext.form.field.ComboBox',
    	'Ext.ux.form.TinyMCETextArea'
    ],

    bodyPadding: 10,

    defaults: {
    	anchor: '100%'
    },

    items: [
    	{
    		xtype: 'container',
    		layout: 'column',
    		defaults: {
    			columnWidth: 0.5,
    			margin: '0 5 5 0'
    		},
    		items: [
    			{
    				xtype: 'datefield',
    				name: 'date',
    				fieldLabel: 'Date'
    			},
    			{
    				xtype: 'numberfield',
    				name: 'fee',
    				fieldLabel: 'Fee',
    				minValue: 0
    			}
    		]
    	}
    ]
  
});
