Ext.define('PatientChart.view.patientinfo.graphs.PatientStats', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.patientstatsgrid',
    requires: [
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.grid.feature.GroupingSummary',
        'Ext.grid.feature.Summary',
        'PatientChart.view.patientinfo.graphs.PatientStatsController'
    ],
    controller: 'patientinfo-graphs-patientstats',
    header: false,
    title: 'Data',
    bind: {
        store: '{PatientDailyStats}'
    },
    features: [{
        ftype: 'groupingsummary',
        groupHeaderTpl: [ '{[Ext.String.capitalize(values.columnName)]}: ' +
            '{name} ({[values.children.length]})' ]
    }, {
        ftype: 'summary',
        dock: 'bottom'
    }],
    columns: [{
            xtype: 'datecolumn',
            dataIndex: 'date',
            flex: 1,
            text: 'Date'
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'height',
            text: 'H',
            align: 'right',
            width: 75,
            format: '00.0'
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'weight',
            text: 'W',
            align: 'right',
            width: 85,
            format: '000.0',
            summaryType: 'average',
            summaryRenderer: function(result) { return 'Avg: ' + result; }
        }, {
            text: 'Blood Pressure',
            columns: [

                {
                    xtype: 'numbercolumn',
                    dataIndex: 'systolic',
                    text: 'Sys',
                    align: 'right',
                    width: 85,
                    format: '000',
                    summaryType: 'average',
                    summaryRenderer: function(result) { return 'Avg: ' + result; }
                }, {
                    xtype: 'numbercolumn',
                    dataIndex: 'diastolic',
                    text: 'Dias',
                    align: 'right',
                    width: 85,
                    renderer: function(value, metadata, record, rowIndex, colIndex, store, view) {
                        if (value > 85) {

                            metadata.tdStyle = 'font-weight: bold; background-color: red; color: white';
                        }
                        return value;
                    },
                    summaryType: 'average',
                    summaryRenderer: function(result) { return 'Avg: ' + result; }
                }
            ]
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'exerciseminutes',
            text: 'Exercise<br>(Mins)',
            align: 'right',
            width: 85,
            summaryType: 'average',
            summaryRenderer: function(result) { return 'Avg: ' + result; }
        }, {
            xtype: 'widgetcolumn',
            width: 120,
            text: 'Body Mass',
            dataIndex: 'bmi',
            widget: {
                xtype: 'sparklinebullet',
                rangeColors: ['#ffff00'],
                performanceColor: '#006400'
            }
        }

    ]

});