
Ext.define('PatientChart.view.admin.billingcodes.BillingCodes',{
    extend: 'Ext.panel.Panel',

    requires: [
        'PatientChart.view.admin.billingcodes.BillingCodesController',
        'PatientChart.view.admin.billingcodes.BillingCodesModel'
    ],

    controller: 'admin-billingcodes-billingcodes',
    viewModel: {
        type: 'admin-billingcodes-billingcodes'
    },

    html: 'Hello, World!!'
});
