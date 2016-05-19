Ext.define('PatientChart.view.viewport.ViewportModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.viewport-viewport',
	data: {
		userName: 'anonymous',
		role: 'admin'
	},
	formulas: {
		isAdmin: {
			get: function(data) {
				return (data.role == 'admin');
			},
			bind: {
				role: '{role}'
			}
		}
	}
});
