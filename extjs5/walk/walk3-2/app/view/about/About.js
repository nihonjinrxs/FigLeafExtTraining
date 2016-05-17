
Ext.define('PatientChart.view.about.About',{
    extend: 'Ext.window.Window',
    alias: 'widget.about',

    requires: [
        'PatientChart.view.about.AboutController',
        'PatientChart.view.about.AboutModel'
    ],

    controller: 'about-about',
    viewModel: {
        type: 'about-about'
    },

    modal: true,
    autoShow: true,
    width: 400,
    height: 300,
    title: 'About Doctor Ext',
    contentEl: 'aboutDoctorExt',
    cls: 'credits'
});
