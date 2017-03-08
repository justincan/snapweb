import $ from 'jquery';
import React from 'react';
import Backbone from 'backbone';
Backbone.$ = $;

import SnapListView from '../views/snaplist';
import AddCard from '../components/add-card';
import SnapList from '../collections/snaplist';
import SnapTools from '../common/snaps';


export default class Home extends React.Component {
  state = {
    apps: [],
    system: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (new SnapList()).fetch({
      data: $.param({
        'installed_only': true
      }),
      success: (snaplist) => {
        snaplist = snaplist.all();  // XXX: it shouldn't be this way

        snaplist.models.forEach((snap) =>
          snap.set('targetSnapUri', SnapTools.getShowSnapUrlFor(snap))
        );

        const apps = snaplist.filter(
            (m) => m.get('type') == 'app' && m.get('id') != 'snapweb'
        );

        const system = snaplist.filter(
            (m) => (m.get('type') != 'app' && m.get('type') != 'gadget') || m.get('id') == 'snapweb'
        );

        this.setState({apps: apps, system: system});
      }});
  }

  render() {
    const apps = this.state.apps;
    const system = this.state.system;

    if (this.state.apps.length == 0 && this.state.system.length == 0) {
      return null; // TODO: empty view
    }

    return (
      <div>
        <AddCard />
        {apps.length > 0 && <SnapListView collection={apps}/>}
        {system.length > 0 && <SnapListView collection={system}/>}
      </div>
    );
  } 
}


/*
// home view
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var SnapListView = require('./snaplist.js');
var SystemSnapsView = require('./system-snaps.js');
var SnapTools = require('../common/snaps.js')

var template = require('../templates/home.hbs');

module.exports = Backbone.Marionette.LayoutView.extend({

  className: 'b-layout__container',

  template : function(model) {
    return template(model);
  },

  onBeforeShow: function() {
    // TODO if collection empty use emptyView

    this.showChildView('installedRegion', new SnapListView({
      doNotDisplayEmptyList: true,
      model: this.model,
      collection: new Backbone.Collection(
        this.collection.filter(
          function(m) {
            return m.get('type') == 'app' && m.get('id') != 'snapweb';
          }
        )
      )
    }));

    this.showChildView('systemSnapsRegion', new SystemSnapsView({
      model: this.model,
      collection: new Backbone.Collection(
        new Backbone.Collection(
          this.collection.filter(
            function(m) {
              return m &&
                ((m.get('type') != 'app' && m.get('type') != 'gadget') ||
                 (m.get('id') == 'snapweb'));
            }
          )
        ).each(function(snap) {
          snap.set('targetSnapUri', SnapTools.getShowSnapUrlFor(snap))
        })
      )
    }));
  },

  regions: {
    installedRegion: '.region-installed',
    systemSnapsRegion: '.region-system-snaps',
  },
});
*/