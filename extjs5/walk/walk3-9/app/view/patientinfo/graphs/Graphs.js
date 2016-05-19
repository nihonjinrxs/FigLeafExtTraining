
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

    config: {
    	header: false,
    	maxColumns: 2
    },

    parts: {
    	patientstats: {
    		viewTemplate: {
    			title: 'Measurements',
    			tools: [
    				{ xtype: 'tool', type: 'plus' },
    				{ xtype: 'tool', type: 'minus' },
    				{ xtype: 'tool', type: 'refresh' }
    			]
    		}
    	},
    	patientheightweight: {
    		viewTemplate: { title: 'Height/Weight' }
    	},
    	weightguage: {
    		viewTemplate: { title: 'Weight' }
    	}
    }
});
