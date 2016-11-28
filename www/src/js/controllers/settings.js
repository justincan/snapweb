var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var React = require('react');
var Radio = require('backbone.radio');
var SettingsLayoutView = require('../views/settings.js');
var TimeInfo = require('../models/time-info.js');
var DeviceInfo = require('../models/device-info.js');

module.exports = {
  index: function() {
    var chan = Radio.channel('root');
    var timeInfo = new TimeInfo;
    var deviceInfo = new DeviceInfo;

    $.when(
          timeInfo.fetch(),
          deviceInfo.fetch()
        ).then(function() {
          var element  = React.createElement(SettingsLayoutView,
                                                 {timeInfo: timeInfo, deviceInfo: deviceInfo});
          chan.command('set:content', {reactElement: element});
        });
  }
};

