/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PatientChart.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'Ext.ux.imageviewer.ImageViewer'
    ],

    alias: 'controller.main',

    onClickButton: function() {
        this.getView().down('tabpanel').add({
            title: 'Chest X-Ray',
            xtype: 'extimageviewer',
            src: PatientChart.AppDefaults.getImageUrl() + 'chestxray.jpg'
        });
    },

    onConfirm: function(choice, text) {

        if (choice === 'ok') {
            this.getViewModel().set('name', text);
        }
    }
});