Ext.define("PatientChart.view.patientinfo.graphs.HeightWeight", {
	extend: "Ext.chart.CartesianChart",
	alias: 'widget.patientheightweight',

	requires: [
		'Ext.chart.axis.Category',
		'Ext.chart.axis.Numeric',
		'Ext.chart.series.Line',
		'Ext.chart.interactions.Crosshair',
		'Ext.chart.interactions.ItemHighlight'
	],

	header: false,

	bind: {
		store: '{PatientDailyStats}'
	},

	axes: [
		{
			type: 'category',
			fields: [ 'datelabel' ],
			title: 'Date',
			position: 'bottom',
			label: { rotate: { degrees: -45 } }
		},
		{
			type: 'numeric',
			fields: [ 'height' ],
			position: 'left',
			title: 'Height'
		},
		{
			type: 'numeric',
			fields: [ 'weight' ],
			position: 'right',
			title: 'Weight',
			grid: {
				odd: {
					opacity: 1,
					fill: '#ddd',
					stroke: '#bbb',
					linewidth: 1
				}
			}
		}
	],

	series: [
		{
			type: 'line',
			xField: 'datelabel',
			yField: [ 'height' ],
			smooth: true
		},
		{
			type: 'line',
			xField: 'datelabel',
			yField: [ 'weight' ],
			smooth: true
		}
	]
});