Ext.define('PatientChart.view.patientinfo.graphs.PatientStats', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.patientstatsgrid',
    requires: [
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'PatientChart.view.patientinfo.graphs.PatientStatsController',
        'Ext.grid.feature.GroupingSummary',
        'Ext.grid.feature.Summary'
    ],
    controller: 'patientinfo-graphs-patientstats',
    header: false,
    title: 'Data',
    bind: {
        store: '{PatientDailyStats}'
    },
    features: [{
        ftype: 'groupingsummary',
        groupHeaderTpl: [
            '{[Ext.String.capitalize(values.columnName)]}: {name} ({[values.children.length]})'
        ]
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
            width: 100,
            format: '00.0',
            summaryType: 'average',
            summaryRenderer: function(result) {
                return 'Avg: ' + result;
            }
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'weight',
            text: 'W',
            align: 'right',
            width: 100,
            format: '000.0',
            summaryType: 'average',
            summaryRenderer: function(result) {
                return 'Avg: ' + result;
            }
        }, {
            text: 'Blood Pressure',
            columns: [

                {
                    xtype: 'numbercolumn',
                    dataIndex: 'systolic',
                    text: 'Sys',
                    align: 'center',
                    width: 100,
                    format: '000',
                    summaryType: 'average',
                    summaryRenderer: function(result) {
                        return 'Avg: ' + result;
                    }
                }, {
                    xtype: 'numbercolumn',
                    dataIndex: 'diastolic',
                    text: 'Dias',
                    align: 'center',
                    width: 100,
                    summaryType: 'average',
                    summaryRenderer: function(result) {
                        return 'Avg: ' + result;
                    },
                    renderer: function(value, metadata, record, rowIndex, colIndex, store, view) {
                        if (value > 85) {

                            metadata.tdStyle = 'font-weight: bold; background-color: red; color: white';
                        }
                        return value;
                    }

                }
            ]
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'exerciseminutes',
            text: 'Exercise<br>(Mins)',
            align: 'right',
            width: 100,
            summaryType: 'average',
            summaryRenderer: function(result) {
                return 'Avg: ' + result;
            }
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