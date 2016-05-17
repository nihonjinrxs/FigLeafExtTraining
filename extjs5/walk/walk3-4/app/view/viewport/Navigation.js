Ext.define("PatientChart.view.viewport.Navigation", {
    extend: "Ext.panel.Panel",
    requires: [
        'PatientChart.view.viewport.NavigationController',
        'Ext.button.Button',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],
    controller: "viewport-navigation",
    alias: 'widget.mainnavbar',

    width: 150,
    bodyPadding: 5,
    title: 'Navigate',
    header: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'splitbutton',
        height: 45,
        margin: '0 0 10 0',
        toggleGroup: 'perspectives',
        allowDepress: false
    },
    items: [{
        text: 'Administer',
        iconCls: 'btnAdminIcon',
        menu: {
            width: 182,
            items: [
                { text: 'Allergies', iconCls: 'nose' },
                { text: 'Pre-existing Conditions', iconCls: 'bottleOfPills' },
                { text: 'Billing Codes/Procedures', iconCls: 'medicalBag' }
            ]
        }
    }, {

        text: 'Patients',
        iconCls: 'btnPatientsIcon',
        menu: {
            width: 150,
            items: [
                { text: 'Search', iconCls: 'patientFind' },
                { text: 'Add New', iconCls: 'patientAdd' }
            ]
        }
    }, {

        text: 'Research'
    }, {

        text: 'About'
    }]

});