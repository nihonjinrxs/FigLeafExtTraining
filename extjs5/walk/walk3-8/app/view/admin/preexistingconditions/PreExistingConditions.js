
Ext.define('PatientChart.view.admin.preexistingconditions.PreExistingConditions',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.admin.preexistingconditions.PreExistingConditionsController',
        'PatientChart.view.admin.preexistingconditions.PreExistingConditionsModel'
    ],

    controller: 'admin-preexistingconditions-preexistingconditions',
    viewModel: {
        type: 'admin-preexistingconditions-preexistingconditions'
    },

    html: 'Hello, World!!'
});
