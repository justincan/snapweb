/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');

module.exports = React.createBackboneClass({
  render: function() {
    var model = this.props.model;
    var description = model.get('description');

    return (
      <div>
        <div className="p-strip--light">
          <div className="row">
            <div className="col-2">
              <div className="b-icon-wrapper">
                <img className="b-icon" src={model.get('icon')} width="125" height="125" />
              </div>
            </div>
            <div className="col-6">
              <h1 className="b-snap__title">{model.get('name')}</h1>
              <div className="b-snap__developer">{model.get('developer')}</div>
            </div>
            <div className="col-4">
              Installed goes here
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <h3>About</h3>
              {description != null &&
                <p>{description}</p>
              }
            </div>
        </div>
      </div>
    );
  }
});


/*
var _ = require('lodash');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Handlebars = require('hbsfy/runtime');
var InstallBehavior = require('../behaviors/install.js');
var template = require('../templates/snap-layout.hbs');
var CONF = require('../config.js');

Handlebars.registerPartial('installer', require('../templates/_installer.hbs'));

module.exports = Marionette.LayoutView.extend({

  behaviors: {
    InstallBehavior: {
      behaviorClass: InstallBehavior
    }
  },

  onShow: function() {
    window.scrollTo(0, 0);
  },

  className: 'b-snap',

  template: function(model) {
    // use pretty-bytes on size, when available
    //https://www.npmjs.com/package/pretty-bytes
    // mode.size_human = prettyBytes(model.size)
    return template(model);
  }
});
*/
