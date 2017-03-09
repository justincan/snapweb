
import React from 'react';

import Radio from 'backbone.radio';

import Header from '../components/header'
import Footer from '../components/footer';

import LayoutView from '../views/layout';


var homeController = require('../controllers/home.js');

/*
// var initController = require('../controllers/init.js');
var searchController = require('../controllers/search.js');
var storeController = require('../controllers/store.js');
var settingsController = require('../controllers/settings.js');
var snapController = require('../controllers/snaps.js');
var tokenController = require('../controllers/token.js');

const backboneRoutes = {
  home: {
    controller: homeController,
    appRoutes: {
      '': 'index'
    }
  },
  token: {
    controller: tokenController,
    appRoutes: {
      'access-control': 'index'
    }
  },
  store: {
    controller: storeController,
    appRoutes: {
      'store': 'index',
      'store/section/:section': 'section',
      'search?q=': 'index'
    }
  },
  settings: {
    controller: settingsController,
    appRoutes: {
      'settings': 'index'
    }
  },
  snap: {
    controller: snapController,gt
    appRoutes: {
      'snap/:id': 'snap',
    }
  },
  search: {
    controller: searchController,
    appRoutes: {
      'search?q=:query': 'query',
    }
  }
};
*/

const rootChannel = Radio.channel('root');

const EmptyContent = () =>
  <div></div>;

const BackboneContent = ({content}) =>
  <div
    dangerouslySetInnerHTML={{__html: content}} />;


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  contentChanged(content) {
    var reactElement = content.reactElement || null;
    if (reactElement !== null) {
      this.setState({content: reactElement});
    } else {
      content.backboneView.render();
      this.setState({content: <BackboneContent content={content.backboneView.el.innerHTML}/>});
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

// TODO: alert?

/*
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');:65


if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
var LayoutView = require('./views/layout.js');
var router = require('./routers/router.js');

var snapweb = new Marionette.Application();
var layout = new LayoutView();
layout.render();

$(document).ready(function() {
  snapweb.start();
});

snapweb.on('start', function() {
  Backbone.history.start({pushState: true});
});

$(document).ajaxError(function(event, jqxhr, settings, exception) {
  if (jqxhr.status === 401 && window.location.pathname != '/access-control') {
    window.location = '/access-control';
  }
});
*/
