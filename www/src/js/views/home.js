/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');

var SnapListView = require('./snaplist.js');

//var template = require('../templates/home.hbs');


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

/*
module.exports = Backbone.Marionette.LayoutView.extend({

  className: 'b-layout__container',

  template : function() {
    return template();
  },

  onBeforeShow: function() {
    // TODO if collection empty use emptyView
    this.showChildView('installedRegion', new SnapListView({
      model: new Backbone.Model({
        title: 'Installed snaps',
        isHomeActive: true,
        isGrid: true,
        isAlpha: true,
        canSort: false,
        canStyle: false
      }),
      collection: this.collection
    }));
  },

  regions: {
    installedRegion: '.region-installed'
  }
});
*/