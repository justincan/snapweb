
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../views/app';
//import Home from '../views/home';
import LayoutView from '../views/layout';


var homeController = require('../controllers/home.js');
var searchController = require('../controllers/search.js');
var storeController = require('../controllers/store.js');
var settingsController = require('../controllers/settings.js');
var snapController = require('../controllers/snaps.js');
var tokenController = require('../controllers/token.js');


class BackboneLayout extends React.Component {
  state = {
    content: null
  }

  constructor(props) {
    console.log("BackboneLayout::ctor props=", props);
    super(props);
    this.layoutView = new LayoutView({
        render: (html) => this.setState({content: html})
      });
  }

  componentDidMount() {
    this.layoutView.render();
    const args = Object.values(this.props.isQuery ? this.props.location.query : this.props.params);
    this.props.controller[this.props.method].apply(this.props.controller, args);
  }

  render() {
    return (
      <div className="b-layout">
        <div className="b-layout__banner"></div>
        <div className="b-layout__main"></div>
        <div className="b-layout__footer"></div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
      </div>
    );
  }
}

const LayoutShim = (controller, method, isQuery = false) =>
  (props) => React.createElement(BackboneLayout, {controller, method, isQuery, ...props});


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LayoutShim(homeController, 'index')}/>
    <Route path="store" component={LayoutShim(storeController, 'index')}/>
    <Route path="store/section/:section" component={LayoutShim(storeController, 'section')}/>
    <Route path="settings" component={LayoutShim(settingsController, 'index')}/>
    <Route path="snap/:id" component={LayoutShim(snapController, 'snap')}/>
    <Route path="search" component={LayoutShim(searchController, 'query', true)}/>
    <Route path="access-control" component={LayoutShim(tokenController, 'index')}/>
  </Route>
);


/*
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var homeController = require('../controllers/home.js');
// var initController = require('../controllers/init.js');
var searchController = require('../controllers/search.js');
var storeController = require('../controllers/store.js');
var settingsController = require('../controllers/settings.js');
var snapController = require('../controllers/snaps.js');
var tokenController = require('../controllers/token.js');

module.exports = {

  home: new Marionette.AppRouter({
    controller: homeController,
    appRoutes: {
      '': 'index'
    }
  }),

  token: new Marionette.AppRouter({
    controller: tokenController,
    appRoutes: {
      'access-control': 'index'
    }
  }),

  store: new Marionette.AppRouter({
    controller: storeController,
    appRoutes: {
      'store': 'index',
      'store/section/:section': 'section',
      'search?q=': 'index'
    }
  }),

  settings: new Marionette.AppRouter({
    controller: settingsController,
    appRoutes: {
      'settings': 'index'
    }
  }),

  snap: new Marionette.AppRouter({
    controller: snapController,
    appRoutes: {
      'snap/:id': 'snap',
    }
  }),

  search: new Marionette.AppRouter({
    controller: searchController,
    appRoutes: {
      'search?q=:query': 'query',
    }
  })
};
*/