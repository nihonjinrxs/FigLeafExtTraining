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
    'PatientChart.view.admin.billingcodes.BillingCodes',
    'PatientChart.view.admin.preexistingconditions.PreExistingConditions',
    'PatientChart.view.research.Research',
    'PatientChart.view.research.clinicaltrials.ClinicalTrials',
    'PatientChart.view.research.hospitals.Hospitals'
  ],

  refs: {
    centerRegion: 'viewport > panel[region=center]',
    navButtons: 'mainnavbar',
    viewport: 'viewport'
  },

  routes: {
    'patient/search': {
      action: 'onPatientSearch',
      before: 'onAuthenticate'
    },
    'patient/:id/:tab': {
      action: 'onLoadPatientRecord',
      conditions: {
        ':id': '([0-9]+)'
      },
      before: 'onAuthenticate'
    },
    'admin': {
      action: 'onAdminPerspective',
      before: 'onAuthenticate'
    },
    'admin/:xtype': {
      action: 'onAdminViewWindow',
      before: 'onAuthenticate'
    },
    'research': {
      action: 'onResearchPerspective',
      before: 'onAuthenticate'
    },
    'research/:xtype': {
      action: 'onResearchViewWindow',
      before: 'onAuthenticate'
    }
  },

  focusWin: function(win) {
    Ext.WindowManager.bringToFront(win);
    win.center();
    win.focus();
    win.getEl().frame();
  },

  onAuthenticate: function() {
    var action = arguments[arguments.length - 1],
        me = this;
    if (!PatientChart.credentials) {
      Ext.Msg.prompt(
        "Enter your user ID",
        "Enter a username to identify your session",
        function(button, text) {
          if (button == 'ok') {
            Ext.Ajax.request({
              url: 'http://webapps.figleaf.com/rest/prototypes/auth.json',
              jsonData: { username: text },
              withCredentials: true,
              success: function(response, options) {
                var obj = Ext.decode(response.responseText);
                //debugger;
                if (obj && obj.success) {
                  PatientChart.credentials = {
                    username: obj.username,
                    role: obj.role
                  };
                  action.resume();
                } else {
                  Ext.Msg.alert('Authentication Failed', 'Please try again');
                  action.stop();
                }
              },
              failure: function() {
                Ext.Msg.alert('Authentication Failed', 'Please try again');
                action.stop();
              }
            });
          } else { // user pressed Cancel button
            action.stop();
          }
        },
        this
      );
    } else {
      action.resume();
    }
  },

  onAdminViewWindow: function(xtype) {
    this.setCurrentPerspective('adminperspective');

    var win = Ext.ComponentQuery.query(xtype);
    if (win.length == 1) {
      this.focusWin(win[0]);
    } else {
      this.getCenterRegion().add({
        xtype: xtype
      }).show();
    }
  },

  onAdminPerspective: function() {
    this.setCurrentPerspective('adminperspective');
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

  onResearchViewWindow: function(xtype) {
    this.setCurrentPerspective('researchperspective');

    var win = Ext.ComponentQuery.query(xtype);
    if (win.length == 1) {
      this.focusWin(win[0]);
    } else {
      this.getCenterRegion().add({
        xtype: xtype
      }).show();
    }
  },

  onResearchPerspective: function() {
    this.setCurrentPerspective('researchperspective');
  },

  updateCurrentPerspective: function(newPerspective, oldPerspective) {

    if (newPerspective != oldPerspective) {
      if (this.getCenterRegion()) {
        this.getCenterRegion().destroy();
      }
      this.getViewport().add({
        xtype: newPerspective,
        region: 'center'
      });
      this.getNavButtons()
          .down('#btn' + Ext.String.capitalize(newPerspective))
          .setPressed(true);
    }
  }



});