/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var SnapListView = require('./snaplist.js');

module.exports = React.createBackboneClass({

  render: function() {
    return (
      <SnapListView
        model={this.props.model}
        collection={this.props.collection} />
    );
  }

});
