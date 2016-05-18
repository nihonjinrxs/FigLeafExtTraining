
Ext.define('PatientChart.view.patientinfo.graphs.WeightGauge',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.patientinfo.graphs.WeightGaugeController',
        'PatientChart.view.patientinfo.graphs.WeightGaugeModel'
    ],

    controller: 'patientinfo-graphs-weightgauge',
    viewModel: {
        type: 'patientinfo-graphs-weightgauge'
    },

    html: 'Hello, World!!'
});
