
Ext.define('PatientChart.view.viewport.Viewport',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.viewport.ViewportController',
        'PatientChart.view.viewport.ViewportModel'
    ],

    controller: 'viewport-viewport',
    viewModel: {
        type: 'viewport-viewport'
    },

    html: 'Hello, World!!'
});
