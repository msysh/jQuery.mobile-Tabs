/*
 * jQuery Mobile Framework : "tabs" plugin
 * https://github.com/msysh/jQuery.mobile-Tabs
 *
 * @author Joel Greutman
 * @email joelgreutman@gmail.com
 * @website joelgreutman.com
 * https://github.com/groovetrain/jQuery.mobile-Tabs
 *
 * @author Masayoshi.Ando
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * 
 * http://jquery.org/license
 */
(function($, undefined) {
$.widget("mobile.tabs", $.mobile.widget, {

	options: {
		iconpos: 'top',
		grid: null,
		load: function(event, ui) {},
		beforeTabHide: function(event, ui) {},
		beforeTabShow: function(event, ui) {},
		afterTabShow:  function(event, ui) {}
	},

	_create: function(){
		var $this = this;
		var $tabs = this.element.find("> ul li a");
		var $tabContents = this.element.find(':jqmData(role="tab-content")');
		var iconpos = $tabs.filter('[data-icon]').length ? this.options.iconpos : undefined;
		var $content = $tabs.closest('div:jqmData(role="page")').find('div:jqmData(role="content")');

		$tabs
			.buttonMarkup({
				inline: true,
				corners: false,
				shadow:  false,
				iconpos: iconpos
			})
			.removeClass('ui-link');

		$tabContents.addClass('ui-tabs-content');
		
		if ($tabs.filter('.ui-btn-active').length == 0){
			$tabs.first().addClass('ui-btn-active');
		}
		$tabContents.filter($tabs.eq($this.currentTabIndex()).attr('href')).addClass('ui-tabs-content-active');

		$tabs
			.bind('click', function(event) {
				clickTab.call(this, event);
				return false;
			})
			.bind('tap', function(event){
				clickTab.call(this, event);
				return false;
			});
		
		function clickTab(event) {
			$tabs.removeClass("ui-btn-active");
			$(this).addClass("ui-btn-active");
			$this.changeTab(event, {
				currentTabIndex: $tabs.eq($this.currentTabIndex()),
				currentContent: $this.currentContent(),
				nextTab: $(this),
				nextContent: $tabContents.filter($(this).attr('href'))
			});
			event.preventDefault();
		}

		this._trigger('load', null, {
			currentTabIndex: $tabs.eq($this.currentTabIndex()),
			currentContent: $this.currentContent()
		});
	},
	
	currentTabIndex: function() {
		return this.element.find("> ul li a").find('.ui-btn-active').parent().prevAll().length;
	},

	currentContent: function() {
		return this.element.find('.ui-tabs-content-active');
	},

	changeTab: function(event, ui) {
		if (this._trigger('beforeTabHide', event, ui)){
			ui.currentContent.removeClass('ui-tabs-content-active');
		}
		if (this._trigger('beforeTabShow', event, ui)){
			ui.nextContent.addClass('ui-tabs-content-active');
		}
		this._trigger('afterTabShow', event, $.extend({}, ui, { 
															previousContent: ui.currentContent, 
															currentContent: ui.nextContent, 
															nextContent: null }));
	}
});
})( jQuery );
