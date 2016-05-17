
Ext.define('PatientChart.view.about.About',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.about.AboutController',
        'PatientChart.view.about.AboutModel'
    ],

    controller: 'about-about',
    viewModel: {
        type: 'about-about'
    },

    html: 'Hello, World!!'
});
