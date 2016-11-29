/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBacknone = require('react.backbone');

var SearchBarView = require('./search-bar.js');
var StoreHeaderView = require('./store-header.js');
var StorelistView = require('./storelist.js');

module.exports = React.createBackboneClass({
  render: function() {
    var model = this.props.model;

    return (
      <div className="b-grey-wrapper">
        <div
          style={{display: "inline-block", width: "100%", marginTop: "20px"}}>
          <SearchBarView model={model} />
        </div>

        <StoreHeaderView
          model={model}
          collection={this.props.sections}
        />

        <StorelistView
          model={model}
          collection={this.props.collection.all()}
        />
      </div>
    );
  }
});

/*
module.exports = Backbone.Marionette.LayoutView.extend({

  className: 'b-store',

  template : function(model) {
    return template(model);
  },

  onBeforeShow: function() {
    this.showChildView('searchBar', new SearchBarView({
      model: this.model
    }));

    this.showChildView('storeHeader', new StoreHeaderView({
      model: this.model,
      collection: this.model.sections
    }));

    this.showChildView('storeSnapItemsList', new StorelistView({
      model: this.model,
      collection: this.collection.all()
    }));
  },

  regions: {
    searchBar: '.region-search-bar',
    storeHeader: '.region-store-header',
    storeSnapItemsList: '.region-snaplist',
  }
});
*/