
Ext.define('PatientChart.view.patientinfo.graphs.HeightWeight',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.patientinfo.graphs.HeightWeightController',
        'PatientChart.view.patientinfo.graphs.HeightWeightModel'
    ],

    controller: 'patientinfo-graphs-heightweight',
    viewModel: {
        type: 'patientinfo-graphs-heightweight'
    },

    html: 'Hello, World!!'
});
