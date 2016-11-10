var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('../templates/settings-device.hbs');
var styles = require('../../css/settings-device.css');

module.exports = Backbone.Marionette.ItemView.extend({
  className: 'b-settings__device',

  template: function(model) {
    return template(model);
  },

  templateHelpers: { styles: styles },

  serializeData: function() {
    return { model: this.model.toJSON() };
  }

});
