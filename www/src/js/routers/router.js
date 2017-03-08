
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../views/app';
import Home from '../views/home';
import Snap from '../views/snap';
import Store from '../views/store';
//import Search from '../views/search';
import Settings from '../views/settings';
import Token from '../views/token';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="snap/:id" component={Snap} />
{/*    <Route path="store" component={Store} /> */}
    <Route path="store/section/:section" component={Store} />
{/*    <Route path="search" component={Search} /> */}
{/*    <Route path="settings" component={Settings} /> */}
    <Route path="access-control" component={Token} />
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