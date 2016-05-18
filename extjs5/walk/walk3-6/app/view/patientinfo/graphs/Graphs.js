
Ext.define('PatientChart.view.patientinfo.graphs.Graphs',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientgraphs',

    requires: [
        'PatientChart.view.patientinfo.graphs.GraphsController'
    ],

    controller: 'patientinfo-graphs-graphs',

    html: 'Patient Graphs sub-view'
});
