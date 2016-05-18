
Ext.define('PatientChart.view.patientinfo.graphs.PatientStats',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.patientinfo.graphs.PatientStatsController',
        'PatientChart.view.patientinfo.graphs.PatientStatsModel'
    ],

    controller: 'patientinfo-graphs-patientstats',
    viewModel: {
        type: 'patientinfo-graphs-patientstats'
    },

    html: 'Hello, World!!'
});
