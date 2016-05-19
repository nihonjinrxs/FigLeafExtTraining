
Ext.define('PatientChart.view.research.Research',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.research.ResearchController',
        'PatientChart.view.research.ResearchModel'
    ],

    controller: 'research-research',
    viewModel: {
        type: 'research-research'
    },

    html: 'Hello, World!!'
});
