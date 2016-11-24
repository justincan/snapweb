// snap item view
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');
var Handlebars = require('hbsfy/runtime');
var InstallBehavior = require('../behaviors/install.js');
var template = require('../templates/snaplist-item.hbs');
var snapChannel = Radio.channel('snap');

var Installer = React.createBackboneClass({
  render: function() {
    var model = this.props.model;
    var installActionString = model.get('installActionString');
    var isInstalled = model.get('isInstalled');
    var installerClass = model.get('installerClass');
    var installHTMLClass = model.get('installHTMLClass');

    var rootDivClass = "b-installer " + installerClass + " " + installHTMLClass;
    if (isInstalled) {
      return (
        <div className={rootDivClass}
          {installActionString != null &&
            <button
              className="b-installer__button " + {model.get('buttonClass')} + " " + {model.get('installButtonClass')} + " " + "p-button--neutral">
              {installActionString}
            </button>
            }
        </div>
      );
    } else {
      rootDivClass += "b-installer_disabled";
      var installButton = '';

      if (isInstalled) {
        installButton = <button class="b-installer__button p-button--positive">Installed</button>
      } else {
        installButton = <button class="b-installer__button p-button--negative" disabled>Not installable</button>
      }

      return (
        <div className={rootDivClass}
          {installButton}
        </div>
      );
    }
  }

});


module.exports = React.createBackboneClass({

  render: function() {
    var model = this.props.model;
    var developer = model.get('developer');
    var description = model.get('description');
    var prettyInstalledSize = model.get('prettyInstalledSize');

    vat rootDivClass = "p-card" + model.get('type');

    return (
      <div className={rootDivClass}
      <a href={model.get('targetSnapUri')}>
        <img
          className="p-card__icon"
          src={model.get('icon'}
          width="125"
          height="125">
        <h3 id="js-snap-title"
          className="p-card__title js-snap-title">
          {model.get('name')}
        </h3>
        {developer != null &&
          <p className="p-card__content">By {developer}</p>}
        {description != null &&
          <p className="p-card__content">{description}</p>
        }
        {prettyInstalledSize != null &&
          <p className="p-card__content">{prettyInstalledSize}</p>
        }
        <footer className="p-card__footer">
          <div className="u-float--right">
            <Installer />
          </div>
        </footer>
      </a>
    );
  }

});

/*
module.exports = Marionette.ItemView.extend({

  className: function() {
    var type = this.model.get('type');
    var className = 'p-card';

    if (type) {
      className += ' p-card-' + type;
    }

    return className;
  },

  template: function(model) {
    return template(model);
  },

  ui: {
    'snapTitle': '#js-snap-title'
  },

  events: {
    'click @ui.snapTitle':  'showSnap'
  },

  behaviors: {
    InstallBehavior: {
      behaviorClass: InstallBehavior
    }
  },
});
*/