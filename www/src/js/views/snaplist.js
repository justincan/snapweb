
import React from 'react';
import Card from '../components/snaplist-item';


export default class SnapListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.collection.map((snap, index) =>
      <Card
        key={index}
        model={snap}
      />);  

    return (
      <div className="p-strip--light">
        <div className="row">
          <div id="js-snaplist" className="p-card-deck">
            <div className="card-deck-row-header">
              <div className="card-deck-row-header__item">
                  Name
              </div>
              <div className="card-deck-row-header__item">
                  Publisher
              </div>
              <div className="card-deck-row-header__item">
              </div>
            </div>
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

/*
// snaplist view
var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var SnaplistItemView = require('../views/snaplist-item.js');
var EmptySnaplistView = require('./empty-snaplist.js');
var template = require('../templates/snaplist.hbs');
var CONF = require('../config.js');
var SnapTools = require('../common/snaps.js')

module.exports = Marionette.CompositeView.extend({

  childViewContainer: '#js-snaplist',

  initialize : function(options) {
    if (options.doNotDisplayEmptyList) {
      this.emptyView = null;
    }
    // "patch" the model with the snap details browse URI
    this.collection.each(function(snap) {
      snap.set('targetSnapUri', SnapTools.getShowSnapUrlFor(snap))
    });
  },

  template : function(model) {
    return template(model);
  },

  childViewOptions: function(model, index) {
    var lastCol = (index != 0 && ((index + 1) % 4) == 0);

    return {
      lastCol: lastCol
    };
  },

  childView: SnaplistItemView,

  emptyView: EmptySnaplistView
});
*/