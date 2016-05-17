
Ext.define('PatientChart.view.viewport.Navigation',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.viewport.NavigationController',
        'PatientChart.view.viewport.NavigationModel'
    ],

    controller: 'viewport-navigation',
    viewModel: {
        type: 'viewport-navigation'
    },

    html: 'Hello, World!!'
});
