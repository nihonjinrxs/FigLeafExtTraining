
Ext.define('PatientChart.view.research.Research',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.researchperspective',

    requires: [
        'PatientChart.view.research.ResearchController',
        'PatientChart.view.research.ResearchModel'
    ],

    controller: 'research-research',
    viewModel: {
        type: 'research-research'
    },

    cls: 'appBackground'
});
