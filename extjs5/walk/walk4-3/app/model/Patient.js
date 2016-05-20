Ext.define('PatientChart.model.Patient', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'firstname', type: 'auto' },
        { name: 'lastname', type: 'auto' },
        { name: 'dob', type: 'auto' },
        { name: 'gender', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'address', type: 'auto' },
        { name: 'city', type: 'auto' },
        { name: 'state', type: 'auto' },
        { name: 'zip', type: 'auto' },
        { name: 'photoUrl', type: 'auto' },
        { name: 'allergies', type: 'auto' },
        { name: 'preexistingconditions', type: 'auto' },
        { name: 'notes', type: 'auto' }

    ]
});
