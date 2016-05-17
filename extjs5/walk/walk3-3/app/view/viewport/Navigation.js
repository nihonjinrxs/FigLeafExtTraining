
Ext.define('PatientChart.view.viewport.Navigation',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainnavbar',

    requires: [
        'PatientChart.view.viewport.NavigationController',
        'Ext.layout.container.VBox',
        'Ext.button.Button'
    ],

    controller: 'viewport-navigation',

    width: 150,
    bodyPadding: 5,
    title: 'Navigate',
    header: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'button'
    },
    items: [
        { text: 'Administer' },
        { text: 'Patients' },
        { text: 'Research' },
        { text: 'About' }
    ]
});
