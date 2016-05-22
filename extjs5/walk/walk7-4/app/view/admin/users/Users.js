
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
    constrain: true,

    items: [
        {
            xtype: 'treepanel',
            bind: {
                selection: '{selectedNode}',
                store: '{Users}'
            },
            viewConfig: {
                plugins: [
                    {
                        ptype: 'treeviewdragdrop',
                        appendOnly: true,
                        nodeHighlightOnDrop: true,
                        nodeHighlightOnRepair: true
                    }
                ]
            },
            plugins: [
                {
                    ptype: 'cellediting',
                    clicksToEdit: 2
                }
            ],
            columns: [
                {
                    xtype: 'treecolumn',
                    dataIndex: 'text',
                    text: 'Departments/Users',
                    flex: 1,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false,
                        allowOnlyWhitespace: false,
                        maxLength: 100
                    }
                }
            ]
        }
    ]
});
