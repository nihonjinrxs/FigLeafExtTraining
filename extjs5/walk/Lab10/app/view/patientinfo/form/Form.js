
Ext.define("PatientChart.view.patientinfo.form.Form",{
    extend: "Ext.form.Panel",
    alias: 'widget.patientform',
    requires: [
    	'PatientChart.view.patientinfo.form.FormController',
    	'PatientChart.view.patientinfo.form.FormModel'
    ],
    controller: "patientinfo-form-form",
    viewModel: {
		type: "formmodel"
	},

    layout: 'auto',
    bodyPadding: 5,
    title: 'Patient Information',
    modelValidation: true,

    listeners: {
        'beforerender': 'onFormBeforeRender'
    },

    tools: [{
        xtype: 'tool',
        type: 'save',
        formBind: true,
        callback: 'saveForm'
    }],

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'component',
                    border: 1,
                    height: 164,
                    bind: {
                        style: {
                            border: '1px solid black',
                            'border-radius': '5px',
                            'background-image': 'url({profileImage})',
                            'background-repeat': 'no-repeat',
                            'background-position': 'center'
                        }
                    },
                    width: 173
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: '0 5 0 5',
                    defaults: {
                        anchor: '100%'
                    },
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'patientid',
                            bind: '{patient.id}'
                        },
                        {
                            xtype: 'textfield',
                            name: 'firstname',
                            fieldLabel: 'First Name',
                            bind: '{patient.firstname}',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'lastname',
                            fieldLabel: 'Last Name',
                            bind: '{patient.lastname}',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'address',
                            fieldLabel: 'Address',
                            bind: '{patient.address}'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            fieldLabel: 'City, State, Z',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'city',
                                    fieldLabel: '',
                                    bind: '{patient.city}',
                                    flex: 1,
                                    margin: '0 5 0 0'
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'state',
                                    bind: '{patient.state}',
                                    hideLabel: true,
                                    width: 80,
                                    margin: '0 5 0 0',
                                    displayField: 'abbreviation',
                                    valueField: 'abbreviation',
                                    bind: {
                                        store: '{States}',
                                        value: '{patient.state}'
                                    },
                                    queryMode: 'local',
                                    forceSelection: true
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'zipcode',
                                    bind: '{patient.zipcode}',
                                    hideLabel: true,
                                    width: 80
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            vtype: 'email',
                            name: 'email',
                            fieldLabel: 'Email',
                            bind: '{patient.email}'
                        },
                        {
                            xtype: 'datefield',
                            name: 'dob',
                            fieldLabel: 'Date of Birth',
                            bind: '{patient.dob}'
                        },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Gender',
                            layout: 'hbox',
                            allowBlank: false,
                            bind: { value: 'patient.gender' },
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'gender',
                                    boxLabel: 'Male',
                                    inputValue: 'Male',
                                    margin: '0 10 0 0'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'gender',
                                    boxLabel: 'Female',
                                    inputValue: 'Female'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            margin: '10 5 0 0',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'filefield',
                    name: 'profilePhoto',
                    fieldLabel: 'Upload Image'
                },
                {
                    xtype: 'tagfield',
                    name: 'allergies',
                    fieldLabel: 'Allergies',
                    store: 'Allergies',
                    bind: { value: '{patient.allergies}' }
                },
                {
                    xtype: 'fieldset',
                    title: 'Pre-Existing Conditions',
                    anchor: '100% -250',
                    items: [
                        {
                            xtype: 'checkboxgroup',
                            bind: { value: '{patient.preexistingconditions}' },
                            reference: 'preexistingconditions',
                            hideLabel: true,
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    fieldLabel: 'Label',
                                    boxLabel: 'Box Label'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tinymce',
                    name: 'notes',
                    fieldLabel: 'Notes',
                    bind: '{patient.notes}',
                    labelAlign: 'top',
                    height: 300
                }
            ]
        }
    ]
  
});
