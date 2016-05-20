Ext.define('PatientChart.view.patientinfo.ChooserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-chooser',
    
    onPatientSelect: function(grid, record, item, index, event, eventOptions) {
    	this.redirectTo('patient/' + record.get('id') + '/patientform');
    	grid.up('window').destroy();
    }
});
