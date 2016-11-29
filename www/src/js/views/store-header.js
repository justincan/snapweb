/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react')
var ReactBackbone = require('react.backbone');


module.exports = React.createBackboneClass({
  render: function() {
    var model = this.props.model;

    return (
      <span className="b-sections-list">
        <a href={"/search?section=" + model.get('sectionName')}>sectionName</a>
      </span>
    );
  }
});
