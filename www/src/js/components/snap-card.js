/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var model = this.props.model;
    var developer = model.get('developer');
    var description = model.get('description');
    var prettyInstalledSize = model.get('prettyInstalledSize');

    var rootDivClass = "p-card p-card-" + model.get('type');

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


