
Ext.define('PatientChart.view.patientinfo.Chooser',{
    extend: 'Ext.window.Window',
    alias: 'widget.patientsearchwindow',

    requires: [
        'PatientChart.view.patientinfo.ChooserController'
    ],

    controller: 'patientinfo-chooser',

    width: 700,
    height: 400,
    layout: 'fit',
    title: 'Select a Patient',

    items: [
        {
            xtype: 'grid',
            header: false,
            bind: {
                store: '{Patients}'
            },
            columns: [
                { xtype: 'rownumberer' },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lastname',
                    text: 'Last Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'firstname',
                    text: 'First Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'address',
                    text: 'Address',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'email',
                    text: 'E-mail',
                    width: 150,
                    renderer: function(value) {
                        return Ext.String.format(
                            '<a href="mailto:{0}" target="_blank">{0}</a>',
                            value
                        );
                    }
                }
            ]
        }
    ]
});
