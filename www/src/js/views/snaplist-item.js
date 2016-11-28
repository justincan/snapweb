/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');

var Radio = require('backbone.radio');
var Handlebars = require('hbsfy/runtime');
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
        <div className={rootDivClass}>
          {installActionString != null &&
            <button
              className={"b-installer__button " + model.get('buttonClass') + " " + model.get('installButtonClass') + " " + "p-button--neutral"}>
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
        <div className={rootDivClass}>
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

//    var rootDivClass = "p-card-" + model.get('type');
    var rootDivClass = "p-card";

    return (
      <div className={rootDivClass}>
        <a href={model.get('targetSnapUri')}>
          <img
            className="p-card__icon"
            src={model.get('icon')}
            width="125"
            height="125" />
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
              <Installer model={model}/>
            </div>
          </footer>
        </a>
      </div>
    );
  }

});
