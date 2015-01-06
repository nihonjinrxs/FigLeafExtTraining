/*
 * File: app/view/patientchart/graphs/GraphsViewController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PatientChart.view.patientchart.graphs.GraphsViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.patientchartgraphs',

	addRecord: function(panel,tool,e) {
		var grid = panel.down('grid');
		grid.fireEvent('addrecord',grid);
	},

	delRecord: function(panel,tool,e) {
		var grid = panel.down('grid');
		grid.fireEvent('delrecord',grid);
	},

	redrawPolarChart: function(panel,tool,e) {
		panel.down('polar').redraw();
	}

});