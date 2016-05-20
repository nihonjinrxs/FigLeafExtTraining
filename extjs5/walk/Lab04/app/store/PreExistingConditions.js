Ext.define('PatientChart.store.PreExistingConditions', {
    extend: 'Ext.data.Store',

    requires: [
        'PatientChart.model.PreExistingCondition',
        'Ext.util.Sorter'
    ],

    model: 'PatientChart.model.PreExistingCondition',
    autoLoad: true,
    sorters: {
        property: 'text'
    }
});