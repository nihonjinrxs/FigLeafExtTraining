
Ext.define('PatientChart.view.patientinfo.PatientInfo',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientinfo',

    requires: [
        'PatientChart.view.patientinfo.PatientInfoModel',
        'PatientChart.view.patientinfo.PatientInfoController',
        'PatientChart.view.patientinfo.anatomy.Anatomy',
        'PatientChart.view.patientinfo.form.Form',
        'PatientChart.view.patientinfo.graphs.Graphs',
        'PatientChart.view.patientinfo.media.Media',
        'PatientChart.view.patientinfo.procedures.Procedures'
    ],

    controller: 'patientinfo-patientinfo',
    viewModel: {
        type: 'patientinfo-patientinfo'
    },

    layout: 'border',

    header: false,
    title: 'Patient Information',

    items: [
        {
            xtype: 'patientanatomy',
            region: 'east',
            width: 235,
            title: 'Anatomy',
            split: true,
            collapsible: true
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            removePanelHeader: false,
            tabPosition: 'bottom',
            items: [
                { xtype: 'patientform', title: 'Patient Info' },
                { xtype: 'patientprocedures', title: 'Procedures' },
                { xtype: 'patientmedia', title: 'Media' },
                { xtype: 'patientgraphs', title: 'Statistics' },
            ]
        }
    ]
});
