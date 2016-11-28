/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');

module.exports = React.createBackboneClass({
  render: function() {
    return (
      <div className="row">
          <div className="col-12">
              <h2>Users</h2>
          </div>
      </div>
    );
  }
});