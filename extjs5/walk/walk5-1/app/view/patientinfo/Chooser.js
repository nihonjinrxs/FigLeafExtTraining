
Ext.define('PatientChart.view.patientinfo.Chooser',{
    extend: 'Ext.window.Window',
    alias: 'widget.patientsearchwindow',

    requires: [
        'PatientChart.view.patientinfo.ChooserController'
    ],

    controller: 'patientinfo-chooser',

    width: 700,
    height: 400,
    layout: 'fit',
    title: 'Select a Patient'
});
