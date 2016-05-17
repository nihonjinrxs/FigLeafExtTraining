Ext.define('PatientChart.AppDefaults', {
    singleton: true,
    config: {
        webserviceUrl: 'http://webapps.figleaf.com/rest/prototypes/',
        imageUrl: 'http://webapps.figleaf.com/webservices/media/'
    },
    constructor: function(config) {
        this.initConfig(config);
    }
});