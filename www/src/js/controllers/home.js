var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var Radio = require('backbone.radio');
var HomeLayoutView = require('../views/home.js');
var Bask = require('../collections/snaplist.js');

module.exports = {
  index: function() {
    var chan = Radio.channel('root');
    var installedBask = new Bask();

    installedBask.fetch({
      data: $.param({
        'installed_only': true
      }),
      success: function(snaplist) {
        var element = React.createElement(HomeLayoutView, {
          collection: snaplist.installed()
        });
        chan.command('set:content', {reactElement: element});
      }
    });
  }
};
