Ext.define('PatientChart.store.PreExistingConditions', {
    extend: 'Ext.data.Store',

    requires: [
        'PatientChart.model.PreExistingCondition',
        'Ext.util.Sorter'
    ],

    autoLoad: true,
    buffered: true,
    model: 'PatientChart.model.PreExistingCondition',
    sorters: {
        property: 'text'
    }

});