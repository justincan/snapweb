var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');
var SettingsLayoutView = require('../views/settings.js');
var DeviceInfo = require('../models/device-info.js');

module.exports = {
  index: function() {
    var chan = Radio.channel('root');
    var deviceInfo = new DeviceInfo;
    console.log('REQUESTING device info');
    deviceInfo.fetch({
        success: function(deviceInfo) {
          console.log('FETCH SUCCESS deviceInfo=' + JSON.stringify(deviceInfo));
          var view = new SettingsLayoutView({
                  deviceInfo: deviceInfo
                });
          chan.command('set:content', view);
        },
        error: function() {
          console.log('FAILED to grab device info');
        }});
  }
};
