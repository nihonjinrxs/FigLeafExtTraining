
Ext.define('PatientChart.view.patientinfo.PatientInfo',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientinfo',
    
    requires: [
        'PatientChart.view.patientinfo.PatientInfoModel',
        'PatientChart.view.patientinfo.PatientInfoController',
        'PatientChart.view.patientinfo.anatomy.Anatomy',
        'PatientChart.view.patientinfo.form.Form',
        'PatientChart.view.patientinfo.graphs.Graphs',
        'PatientChart.view.patientinfo.media.Media',
        'PatientChart.view.patientinfo.procedures.Procedures'
    ],

    controller: 'patientinfo-patientinfo',
    viewModel: {
        type: 'patientinfo-patientinfo'
    }
});
