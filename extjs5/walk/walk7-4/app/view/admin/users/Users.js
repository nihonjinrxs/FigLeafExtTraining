
Ext.define('PatientChart.view.admin.users.Users',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.admin.users.UsersController',
        'PatientChart.view.admin.users.UsersModel'
    ],

    controller: 'admin-users-users',
    viewModel: {
        type: 'admin-users-users'
    },

    html: 'Hello, World!!'
});
