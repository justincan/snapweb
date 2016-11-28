/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var SnaplistItemView = require('../views/snaplist-item.js');
var EmptySnaplistView = require('./empty-snaplist.js');
var AddStoreCard = require('../components/add-store-card.js');

module.exports = React.createBackboneClass({
  render: function() {
    var model = this.props.model;
    var collection = this.props.collection;
    var homeActive = model.get('isHomeActive');

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

            {homeActive &&
              <AddStoreCard />}

            {collection.length == 0 ? (
              <EmptySnaplistView />
            ) : (
              <ul>
                {collection.map(function(snap) {
                  return (
                    <SnaplistItemView key={snap.id} model={snap} />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
});
