
Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfo',{
    extend: 'Ext.window.Window',
    alias: 'widget.hospitalinfotreegrid',

    requires: [
        'PatientChart.view.research.hospitalinfo.HospitalInfoController',
        'PatientChart.view.research.hospitalinfo.HospitalInfoModel'
    ],

    controller: 'research-hospitalinfo-hospitalinfo',
    viewModel: {
        type: 'research-hospitalinfo-hospitalinfo'
    },

    layout: 'fit',
    constrain: true,
    autoShow: true,
    maximizable: true,
    height: 475,
    width: 900,
    title: 'Hospital Treatment Costs',

    items: [
        {
            xtype: 'treepanel',
            rootVisible: false,
            useArrows: true,
            showHeader: false,
            bind: {
                store: '{HospitalInfo}'
            },
            columns: [
                {
                    xtype: 'treecolumn',
                    dataIndex: 'text',
                    flex: 1,
                    text: 'Hospital'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'treatmentcount',
                    text: '# Treatments',
                    format: '0',
                    align: 'right'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'totaldischarges',
                    text: 'Discharges',
                    format: '0,0',
                    align: 'right'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'averagetotalpayments',
                    text: 'Avg Payments',
                    format: '0,0',
                    align: 'right'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'averagemedicarepayments',
                    text: 'Avg Medicare<br/>Payments',
                    format: '0,0',
                    align: 'right'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'averagecoveredcharges',
                    text: 'Avg Covered<br/>Charges',
                    format: '0,0',
                    align: 'right'
                }
            ]
        }
    ]

});
