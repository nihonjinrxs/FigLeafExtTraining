Ext.define('PatientChart.view.research.hospitals.HospitalsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.research-hospitals-hospitals',

	onTreepanelCheckChange: function(node, checked, eventOptions) {
		var nodeValue = null,
			nodeType = null,
			nodeModifier = null,
			serverFilters = [],
			filters = {};
		var nodes = this.lookupReference('statefiltertree').getChecked();
		for (var i = 0; i < nodes.length; i++) {
			nodeValue = nodes[i].get('id').split(':');
			nodeType = nodeValue[0];
			nodeModifier = nodeValue[1];

			if (!filters[nodeType]) {
				filters[nodeType] = [];
			}
			filters[nodeType].push(nodeModifier);
		}
		for (var nodeType in filters) {
			serverFilters.push({
				property: nodeType,
				value: filters[nodeType]
			});
		}
		var store = this.getStore('HospitalStats');
		store.clearFilter(true);
		if (serverFilters.length === 0) {
			store.removeAll();
		} else {
			store.filter(serverFilters);
			console.log('>> onTreepanelCheckChange >> adding serverFilters: ',
						serverFilters);
		}
	}
	
});