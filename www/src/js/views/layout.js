// main layout view
var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDOM = require('react-dom');
var Radio = require('backbone.radio');
var BannerView = require('./layout-banner.js');
var FooterView = require('./layout-footer.js');
var NotificationsView = require('./alerts.js');
var template = require('../templates/layout.hbs');
var chan = Radio.channel('root');

module.exports = Marionette.LayoutView.extend({

  initialize: function(options) {
    this.externalRender = options.render;
    chan.comply('set:content', this.setContent, this);
    chan.comply('alert:error', this.alertError, this);
  },

  el: '.b-layout',

  template : function() {
    return template();
  },

  onRender: function() {
    this.showChildView('bannerRegion', new BannerView());
    this.showChildView('footerRegion', new FooterView());
  },

  attachElContent: function(html) {
    this.externalRender(html);
    return this;
  },

  setContent: function(content) {
    var reactElement = content.reactElement || null;
    if (reactElement !== null) {
      console.log("before react render", reactElement);
      console.log("__main=", $('.b-layout__main').get(0));
      ReactDOM.render(reactElement, $('.b-layout__main').get(0));
      console.log("after react render")
    } else {
      this.mainRegion.show(content.backboneView);
    }
  },

  alertError: function(model) {
    this.showChildView('alertsRegion', new NotificationsView({
      model: model
    }));
  },

  regions: {
    bannerRegion:   '.b-layout__banner',
    mainRegion:     '.b-layout__main',
    footerRegion:   '.b-layout__footer',
    alertsRegion:   '.b-layout__alerts'
  }
});
