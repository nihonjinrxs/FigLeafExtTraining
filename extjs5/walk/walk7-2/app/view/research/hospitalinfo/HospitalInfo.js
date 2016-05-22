
Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfo',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.research.hospitalinfo.HospitalInfoController',
        'PatientChart.view.research.hospitalinfo.HospitalInfoModel'
    ],

    controller: 'research-hospitalinfo-hospitalinfo',
    viewModel: {
        type: 'research-hospitalinfo-hospitalinfo'
    },

    html: 'Hello, World!!'
});
