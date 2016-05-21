Ext.define('PatientChart.view.patientinfo.media.MediaController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.patientinfo-media-media',

	onShowMediaAsset: function(dataview, record, item, index, event) {
		var pv = dataview.up('tabpanel');
		var eventName = "show" + record.get('filetype');
		pv.fireEvent(
			eventName,
			pv,
			dataview,
			record.get('title'),
			record.get('fileurl'),
			record
		);
	}
	
});