Ext.define('PatientChart.controller.Main', {
  extend: 'Ext.app.Controller',

  config: {
    currentPerspective: null
  },

  requires: [
    'Ext.app.route.Route',
    'PatientChart.view.about.About',
    'PatientChart.view.admin.Admin',
    'PatientChart.view.admin.allergies.Allergies',
    'PatientChart.view.admin.preexistingconditions.PreExistingConditions',
    'PatientChart.view.admin.billingcodes.BillingCodes'
  ],

  refs: {
    centerRegion: 'viewport > panel[region=center]',
    navButtons: 'mainnavbar',
    viewport: 'viewport'
  },

  routes: {
    'admin': {
      action: 'onAdminPerspective'
    },
    'admin/:xtype': {
      action: 'onAdminViewWindow'
    },
    'patient/search': {
      action: 'onPatientSearch'
    },
    'patient/:id/:tab': {
      action: 'onLoadPatientRecord',
      conditions: {
        ':id': '([0-9]+)'
      }
    }
  },

  focusWin: function(win) {
    Ext.WindowManager.bringToFront(win);
    win.center();
    win.focus();
    win.getEl().frame();
  },

  onAdminPerspective: function() {
    this.setCurrentPerspective('adminperspective');
  },

  onAdminViewWindow: function(xtype) {
    this.setCurrentPerspective('adminperspective');
    var win = Ext.ComponentQuery.query(xtype);
    if (win.length === 1) {
      this.focusWin(win[0]);
    } else {
      this.getCenterRegion().add({
        xtype: xtype
      }).show();
    }
  },

  onPatientSearch: function() {
    // patientchartperspective is the xtype for the 
    // patientinfo view

    this.setCurrentPerspective('patientinfoperspective');
  },

  onLoadPatientRecord: function(id, tab) {
    this.setCurrentPerspective('patientinfoperspective');

    if (tab) {
      var tp = this.getCenterRegion().down('tabpanel');
      tp.setActiveTab(
        tp.down('panel[reference=' + tab + ']')
      );
    }

  },

  updateCurrentPerspective: function(newPerspective, oldPerspective) {

    if (newPerspective !== oldPerspective) {
      if (this.getCenterRegion()) {
        this.getCenterRegion().destroy();
      }
      this.getViewport().add({
        xtype: newPerspective,
        region: 'center'
      });
      this.getNavButtons().down('#btn' + Ext.String.capitalize(newPerspective)).setPressed(true);
    }
  }
});