Ext.define("PatientChart.view.patientinfo.media.Media", {
	extend: "Ext.panel.Panel",
	requires: [
		'PatientChart.view.patientinfo.media.MediaController',
		'Ext.ux.DataView.Animated'
	],
	alias: 'widget.patientmedia',
	controller: "patientinfo-media-media",
	layout: 'fit',
	plugins: [
		Ext.create('Ext.ux.DataView.Animated', {
			duration: 550,
			idProperty: 'id'
		})
	],
	tools: [
		{ xtype: 'tool', type: 'gear', callback: 'onShowMenu' }
	],
	items: [{
		xtype: 'dataview',
		scrollable: true,
		bind: {
			store: '{PatientMediaAssets}'
		},
		itemCls: 'patientMediaAsset',
		itemTpl: [
			'<img src="http://webapps.figleaf.com/webservices/media/{filepreviewimageurl}">',
			'<strong>{title}<br>{[Ext.Date.format(values.date,"m/d/Y @ H:i")]}</strong>'
		],
		listeners: {
			'itemdblclick': 'onShowMediaAsset'
		}
	}]

});
