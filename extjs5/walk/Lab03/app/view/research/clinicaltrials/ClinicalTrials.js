
Ext.define('PatientChart.view.research.clinicaltrials.ClinicalTrials',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.research.clinicaltrials.ClinicalTrialsController',
        'PatientChart.view.research.clinicaltrials.ClinicalTrialsModel'
    ],

    controller: 'research-clinicaltrials-clinicaltrials',
    viewModel: {
        type: 'research-clinicaltrials-clinicaltrials'
    },

    html: 'Hello, World!!'
});
