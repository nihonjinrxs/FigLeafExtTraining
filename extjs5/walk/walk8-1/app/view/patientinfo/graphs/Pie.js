
Ext.define('PatientChart.view.patientinfo.graphs.Pie',{
    extend: 'Ext.chart.PolarChart',
    alias: 'widget.dietpiechart',

    requires: [
        'PatientChart.view.patientinfo.graphs.PieController',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.ItemHighlight'
    ],

    controller: 'patientinfo-graphs-pie'
});
