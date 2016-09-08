var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');
var SettingsLayoutView = require('../views/settings.js');
var DeviceInfo = require('../models/device-info.js');
var TimeInfo = require('../models/time-info.js');

module.exports = {
  index: function() {
    var chan = Radio.channel('root');
    var deviceInfo = new DeviceInfo;
    var timeInfo = new TimeInfo;

    $.when(deviceInfo.fetch(),
           timeInfo.fetch()
        ).then(function() {
          var view = new SettingsLayoutView({
                  deviceInfo: deviceInfo,
                  timeInfo: timeInfo
                });
          chan.command('set:content', view);
        });
  }
};

