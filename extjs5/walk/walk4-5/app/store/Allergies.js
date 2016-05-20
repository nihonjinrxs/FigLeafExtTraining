Ext.define('PatientChart.store.Allergies', {
	extend: 'Ext.data.Store',

	requires: [
		'PatientChart.model.Allergy'
	],

	model: 'PatientChart.model.Allergy',

	autoLoad: true,
	sorters: {
		property: 'text'
	}
});