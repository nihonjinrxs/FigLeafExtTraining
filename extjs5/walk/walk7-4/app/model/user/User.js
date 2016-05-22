Ext.define('PatientChart.model.user.User', {
	extend: 'Ext.data.TreeModel',
	entityName: 'user',
	fields: [
		{
			name: 'icon',
			defaultValue: 'resources/images/user_generic_blue.png'
		},
		{
			name: 'text',
			defaultValue: 'Last Name, First Name'
		},
		{
			name: 'leaf',
			defaultValue: true
		}
	]
});
