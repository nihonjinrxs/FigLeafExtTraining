Ext.define('PatientChart.store.BillingCodes', {
    extend: 'Ext.data.Store',

    requires: [
        'PatientChart.model.BillingCode',
        'Ext.util.Sorter'
    ],

    model: 'PatientChart.model.BillingCode',
    autoLoad: true,
    sorters: {
        property: 'text'
    }
});