
Ext.define('PatientChart.view.admin.allergies.Allergies',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.admin.allergies.AllergiesController',
        'PatientChart.view.admin.allergies.AllergiesModel'
    ],

    controller: 'admin-allergies-allergies',
    viewModel: {
        type: 'admin-allergies-allergies'
    },

    html: 'Hello, World!!'
});
