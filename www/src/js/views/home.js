/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var SnapListView = require('./snaplist.js');

module.exports = React.createBackboneClass({

  render: function() {
    var model = this.props.model;
    var title = model.get('title');
    var haveTitle = title != null && title != '';

    console.log("HomeView: model=" + JSON.stringify(model));

    return (
      <div>
        {haveTitle != null &&
          <div className="row">
            <h2 className="col-6">
              {title}
            </h2>
          </div>
        }

        <SnapListView
          model={this.props.model}
          collection={this.props.collection} />
      </div>
    );
  }

});
