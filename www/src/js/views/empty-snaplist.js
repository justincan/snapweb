var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var template = require('../templates/empty-snaplist.hbs');

module.exports = React.createBackboneClass({
  render: function() {
    return (
      <div>
        <p>No results were found, please try again.</p>

        <p>Alternatively you can <a href="/store">browse the store for available snaps</a>.</p>
      </div>
    );
  }
});
