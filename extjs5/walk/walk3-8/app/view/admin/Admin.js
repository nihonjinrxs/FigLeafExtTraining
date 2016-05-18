
Ext.define('PatientChart.view.admin.Admin',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.admin.AdminController',
        'PatientChart.view.admin.AdminModel'
    ],

    controller: 'admin-admin',
    viewModel: {
        type: 'admin-admin'
    },

    html: 'Hello, World!!'
});
