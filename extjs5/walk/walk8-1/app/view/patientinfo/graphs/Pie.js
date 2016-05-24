
Ext.define('PatientChart.view.patientinfo.graphs.Pie',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.patientinfo.graphs.PieController',
        'PatientChart.view.patientinfo.graphs.PieModel'
    ],

    controller: 'patientinfo-graphs-pie',
    viewModel: {
        type: 'patientinfo-graphs-pie'
    },

    html: 'Hello, World!!'
});
