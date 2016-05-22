
Ext.define('PatientChart.view.admin.users.Users',{
    extend: 'Ext.window.Window',
    alias: 'widget.editusers',

    requires: [
        'PatientChart.view.admin.users.UsersController',
        'PatientChart.view.admin.users.UsersModel',
        'Ext.tree.plugin.TreeViewDragDrop',
        'Ext.grid.plugin.CellEditing'
    ],

    controller: 'admin-users-users',
    viewModel: {
        type: 'admin-users-users'
    },

    layout: 'fit',
    width: 250,
    height: 500,
    title: 'Edit Users',
    autoShow: true,
    constrain: true
});
