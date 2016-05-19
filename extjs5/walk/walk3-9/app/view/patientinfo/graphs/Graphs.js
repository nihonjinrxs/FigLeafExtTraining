
Ext.define("PatientChart.view.patientinfo.graphs.Graphs",{
    extend: "Ext.dashboard.Dashboard",
    alias: 'widget.patientgraphs',
    requires: [
    	'PatientChart.view.patientinfo.graphs.GraphsController',
    	'PatientChart.view.patientinfo.graphs.HeightWeight',
    	'PatientChart.view.patientinfo.graphs.PatientStats',
    	'PatientChart.view.patientinfo.graphs.WeightGauge'
    ],
    controller: "patientinfo-graphs-graphs",
});
