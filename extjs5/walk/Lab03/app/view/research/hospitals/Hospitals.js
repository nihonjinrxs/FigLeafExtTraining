
Ext.define('PatientChart.view.research.hospitals.Hospitals',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.research.hospitals.HospitalsController',
        'PatientChart.view.research.hospitals.HospitalsModel'
    ],

    controller: 'research-hospitals-hospitals',
    viewModel: {
        type: 'research-hospitals-hospitals'
    },

    html: 'Hello, World!!'
});
