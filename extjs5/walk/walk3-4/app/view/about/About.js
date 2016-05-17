Ext.define('PatientChart.view.about.About', {
	extend: 'Ext.window.Window',
	requires: ['PatientChart.view.about.AboutController'],
	mixins: ['Ext.ux.mixins.WindowAnimations'],
	alias: 'widget.about',
	dockedItems: [
		{
			xtype: "toolbar",
			dock: "bottom",
			style: {
				'background-color': '#0082C9'
			},
			layout: {
				type: 'hbox',
				pack: 'center'
			},
			defaults: {
				xtype: 'button',
				hrefTarget: '_blank',
				flex: 1
			},
			items: [
				{
					text: 'Get Help with a Project',
					href: 'http://www.figleaf.com'
				},
				{
					text: 'Get Trained',
					href: 'http://training.figleaf.com/courses/sencha.cfm'
				},
				{
					text: 'Contact Us',
					href: 'mailto:info@figleaf.com?subject=Dr%20Ext'
				}
			]
		}
	],
	modal: true,
	autoShow: true,
	width: 550,
	height: 375,
	// controller: 'about-about',
	title: 'About Doctor Ext',
	// contentEl: 'aboutDoctorExt', // fails after window deletion
	html: Ext.get('aboutDoctorExt').dom.outerHTML,
	cls: 'credits',
	closeAnimation: 'switchOff'
});