Ext.define('PatientChart.AppDefaults', {
    requires: ['Ext.window.MessageBox'],
    singleton: true,
    config: {
        webserviceUrl: 'http://webapps.figleaf.com/rest/prototypes/',
        imageUrl: 'http://webapps.figleaf.com/webservices/media/',
        versionNumber: '1.0'
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    version: function() {
        Ext.Msg.alert("Doctor Ext", "Version " + this.getVersionNumber());
    }
});