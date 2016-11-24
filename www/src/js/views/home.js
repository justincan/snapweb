/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var SnapListView = require('./snaplist.js');

module.exports = React.createBackboneClass({

  render: function() {
    var model = new Backbone.Model({
        title: 'Installed snaps',
        isHomeActive: true,
        isGrid: true,
        isAlpha: true,
        canSort: false,
        canStyle: false
      });

    return (
      <SnapListView
        model={model}
        collection={this.props.collection} />
    );
  }

});
