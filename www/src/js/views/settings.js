// settings view
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');

var SettingsDeviceView = require('./settings-device.js');
var SettingsProfileView = require('./settings-profile.js');
var SettingsUsersView = require('./settings-users.js');
var SettingsUpdatesView = require('./settings-updates.js');
var SettingsTimeView = require('./settings-time.js');


var MenuItem = React.createClass({
  render: function() {
    var classes="p-list__item js-list-item"
    if (this.props.active) {
      classes += " is-active";
    }

    return (
      <li
        className={classes}
        onClick={this.props.onClick}>
        <svg
          className="p-list__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 96 96.000001"
          dangerouslySetInnerHTML={{__html: this.props.icon}}
          />
         {this.props.title}
      </li>
    );
  }
});


module.exports = React.createBackboneClass({
  setActive: function(section, model) {
    this.setState({
      activeView: section,
      activeModel: model
    });
  },

  getInitialState: function() {
    return {
      activeView: SettingsDeviceView,
      activeModel: this.props.deviceInfo
    };
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-4 suffix-1">
          <ul className="p-list--menu">
            <MenuItem
              active={this.state.activeView == SettingsDeviceView}
              onClick={function(){this.setActive(SettingsDeviceView, this.props.deviceInfo)}.bind(this)}
              title="Device Information"
              icon='<g transform="matrix(0 -.9996 -1 0 441.362 437.83)" color="#000"><path overflow="visible" fill="none" d="M438.002 345.362h-96.038v96h96.038z"/><path style="line-height:normal;font-variant-ligatures:none;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;block-progression:tb;shape-padding:0;isolation:auto;mix-blend-mode:normal" d="M432 393.36c0 23.174-18.835 42-42.016 42-23.18 0-42.017-18.826-42.017-42 0-23.17 18.837-42 42.017-42 23.18 0 42.016 18.83 42.016 42zm-4.002 0c0-21.008-16.994-37.997-38.014-37.997-21.02 0-38.015 16.99-38.015 37.998 0 21.01 16.995 38 38.014 38 21.02 0 38.014-16.99 38.014-38z" fontFamily="sans-serif" whiteSpace="normal" overflow="visible" solidColor="#000000" fill="gray"/><path overflow="visible" fill="gray" d="M397.987 396.362v-6h-32.013v6z"/></g>'
            />

            <MenuItem
              active={this.state.activeView == SettingsProfileView}
              onClick={function(){this.setActive(SettingsProfileView)}.bind(this)}
              title="Profile"
              icon='<g color="#000"><path overflow="visible" fill="none" d="M96 0v96H0V0z"/><path style="line-height:normal;font-variant-ligatures:none;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;block-progression:tb;shape-padding:0;isolation:auto;mix-blend-mode:normal" d="M48 6C24.828 6 6 24.83 6 48s18.828 41.998 42 41.998S90 71.17 90 48C90 24.83 71.172 6 48 6zm0 4c21.01 0 37.998 16.99 37.998 38 0 9.324-3.35 17.852-8.908 24.46-1.21-2.786-2.853-5.3-4.94-7.495-1.955-2.062-4.308-3.79-7.017-5.192-1.144 1.007-2.388 1.9-3.697 2.682 3.188 1.365 5.775 3.117 7.81 5.264h.002c2.162 2.274 3.75 4.902 4.81 7.94C67.26 82.07 58.1 86 48 86c-10.135 0-19.325-3.96-26.133-10.412 1.123-3.013 2.706-5.623 4.78-7.875 2.208-2.328 5.055-4.2 8.626-5.606 3.507-1.38 7.732-2.106 12.696-2.11L48 60c2.886 0 5.613-.508 8.12-1.54l.017-.01.017-.01c2.49-1.078 4.66-2.615 6.45-4.575 1.84-1.96 3.258-4.302 4.242-6.967.994-2.693 1.476-5.672 1.476-8.898v-.002c0-3.18-.484-6.132-1.476-8.822-.98-2.706-2.397-5.073-4.24-7.037-1.79-1.966-3.973-3.483-6.47-4.515C53.623 16.54 50.89 16 48 16c-2.892 0-5.624.54-8.135 1.625-2.5 1.032-4.7 2.543-6.54 4.5l-.01.012-.01.01c-1.792 1.968-3.176 4.333-4.155 7.037l-.002.004c-.99 2.686-1.47 5.634-1.47 8.81 0 3.226.48 6.207 1.474 8.9.98 2.657 2.366 4.993 4.153 6.954l.01.01.01.01c1.23 1.308 2.622 2.424 4.152 3.345-1.274.325-2.5.71-3.668 1.17-4.03 1.587-7.416 3.776-10.074 6.58l-.01.012-.01.01c-2.007 2.177-3.62 4.66-4.855 7.41-5.527-6.598-8.858-15.104-8.858-24.4 0-21.01 16.99-38 37.998-38zm0 9.998c2.408 0 4.573.438 6.562 1.3l.018.01.016.006c1.995.823 3.66 1.983 5.066 3.526l.01.012.01.01c1.453 1.548 2.587 3.42 3.406 5.685l.002.008.004.006c.81 2.195 1.226 4.662 1.226 7.44 0 2.83-.418 5.323-1.226 7.514-.818 2.216-1.953 4.07-3.412 5.623l-.01.01-.01.013c-1.408 1.546-3.083 2.735-5.086 3.606C52.584 55.583 50.412 56 48 56c-2.413 0-4.586-.416-6.578-1.234-2.003-.87-3.707-2.067-5.168-3.62-1.412-1.553-2.528-3.41-3.348-5.632-.808-2.19-1.226-4.684-1.226-7.514 0-2.778.417-5.245 1.226-7.44l.002-.005.004-.008c.82-2.27 1.936-4.147 3.342-5.693 1.46-1.55 3.155-2.717 5.15-3.54l.016-.007.017-.008c1.99-.864 4.156-1.302 6.563-1.302z" fontFamily="sans-serif" whiteSpace="normal" overflow="visible" solidColor="#000000" fill="gray"/></g>'
            />

            <MenuItem
              active={this.state.activeView == SettingsUsersView}
              onClick={function(){this.setActive(SettingsUsersView)}.bind(this)}
              title="Users"
              icon='<g color="#000"><path overflow="visible" fill="none" d="M96 0v96H0V0z"/><path style="line-height:normal;font-variant-ligatures:none;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;block-progression:tb;shape-padding:0;isolation:auto;mix-blend-mode:normal" d="M48 6C24.828 6 6 24.83 6 48s18.828 41.998 42 41.998S90 71.17 90 48C90 24.83 71.172 6 48 6zm0 4c21.01 0 37.998 16.99 37.998 38 0 9.324-3.35 17.852-8.908 24.46-1.21-2.786-2.853-5.3-4.94-7.495-1.955-2.062-4.308-3.79-7.017-5.192-1.144 1.007-2.388 1.9-3.697 2.682 3.188 1.365 5.775 3.117 7.81 5.264h.002c2.162 2.274 3.75 4.902 4.81 7.94C67.26 82.07 58.1 86 48 86c-10.135 0-19.325-3.96-26.133-10.412 1.123-3.013 2.706-5.623 4.78-7.875 2.208-2.328 5.055-4.2 8.626-5.606 3.507-1.38 7.732-2.106 12.696-2.11L48 60c2.886 0 5.613-.508 8.12-1.54l.017-.01.017-.01c2.49-1.078 4.66-2.615 6.45-4.575 1.84-1.96 3.258-4.302 4.242-6.967.994-2.693 1.476-5.672 1.476-8.898v-.002c0-3.18-.484-6.132-1.476-8.822-.98-2.706-2.397-5.073-4.24-7.037-1.79-1.966-3.973-3.483-6.47-4.515C53.623 16.54 50.89 16 48 16c-2.892 0-5.624.54-8.135 1.625-2.5 1.032-4.7 2.543-6.54 4.5l-.01.012-.01.01c-1.792 1.968-3.176 4.333-4.155 7.037l-.002.004c-.99 2.686-1.47 5.634-1.47 8.81 0 3.226.48 6.207 1.474 8.9.98 2.657 2.366 4.993 4.153 6.954l.01.01.01.01c1.23 1.308 2.622 2.424 4.152 3.345-1.274.325-2.5.71-3.668 1.17-4.03 1.587-7.416 3.776-10.074 6.58l-.01.012-.01.01c-2.007 2.177-3.62 4.66-4.855 7.41-5.527-6.598-8.858-15.104-8.858-24.4 0-21.01 16.99-38 37.998-38zm0 9.998c2.408 0 4.573.438 6.562 1.3l.018.01.016.006c1.995.823 3.66 1.983 5.066 3.526l.01.012.01.01c1.453 1.548 2.587 3.42 3.406 5.685l.002.008.004.006c.81 2.195 1.226 4.662 1.226 7.44 0 2.83-.418 5.323-1.226 7.514-.818 2.216-1.953 4.07-3.412 5.623l-.01.01-.01.013c-1.408 1.546-3.083 2.735-5.086 3.606C52.584 55.583 50.412 56 48 56c-2.413 0-4.586-.416-6.578-1.234-2.003-.87-3.707-2.067-5.168-3.62-1.412-1.553-2.528-3.41-3.348-5.632-.808-2.19-1.226-4.684-1.226-7.514 0-2.778.417-5.245 1.226-7.44l.002-.005.004-.008c.82-2.27 1.936-4.147 3.342-5.693 1.46-1.55 3.155-2.717 5.15-3.54l.016-.007.017-.008c1.99-.864 4.156-1.302 6.563-1.302z" fontFamily="sans-serif" whiteSpace="normal" overflow="visible" solidColor="#000000" fill="gray"/></g>'
            />

            <MenuItem
              active={this.state.activeView == SettingsUpdatesView}
              onClick={function(){this.setActive(SettingsUpdatesView)}.bind(this)}
              title="Updates"
              icon='<g color="#000"><path overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M84.93 14.958L67.965 31.934c3.76 1.4 7.71 2.708 11.842 3.925C83.92 37.046 87.984 38.094 92 39c-.936-3.985-2-8.035-3.187-12.147-1.217-4.136-2.51-8.1-3.882-11.894zM11.035 81L28 64.024c-3.76-1.4-7.71-2.708-11.842-3.925-4.113-1.19-8.177-2.237-12.193-3.142.936 3.985 2 8.035 3.187 12.147 1.217 4.136 2.51 8.1 3.882 11.894z" overflow="visible" fill="gray"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" d="M48 8C25.932 8 8 25.932 8 48c0 .652.02 1.3.05 1.945 1.356.336 2.717.686 4.083 1.053C12.05 50.008 12 49.01 12 48c0-19.906 16.094-36 36-36 13.005 0 24.38 6.872 30.705 17.186l2.86-2.862C74.444 15.31 62.076 8 48 8zm35.863 36.97c.084 1 .137 2.008.137 3.03 0 19.906-16.094 36-36 36-13.025 0-24.416-6.892-30.736-17.232l-2.88 2.88C21.512 80.682 33.908 88 48 88c22.068 0 40-17.932 40-40a2 2 0 0 0-.04-.406c-.006-.532-.032-1.058-.058-1.584-1.34-.332-2.687-.68-4.04-1.04z" fontFamily="sans-serif" whiteSpace="normal" overflow="visible" solidColor="#000000" fill="gray"/></g>'
            />

            <MenuItem
              active={this.state.activeView == SettingsTimeView}
              onClick={function(){this.setActive(SettingsTimeView, this.props.timeInfo)}.bind(this)}
              title="Date and time"
              icon='<path color="#000" overflow="visible" fill="none" d="M96 0v96H0V0z"/><g style="line-height:125%;-inkscape-font-specification:Ubuntu;text-align:end" fontSize="48.036" fontFamily="Ubuntu" letterSpacing="0" wordSpacing="0" textAnchor="end" fill="gray"><path d="M43.74 45.264q0 1.73-.722 3.362-.672 1.584-1.825 3.17-1.152 1.536-2.593 3.073-1.44 1.488-2.882 2.93l-1.92 1.92q-1.057 1.104-2.018 2.305-.96 1.2-1.633 2.305-.624 1.105-.624 1.92h15.32v3.795h-20.17q-.05-.288-.05-.576v-.53q0-2.257.722-4.178.768-1.97 1.97-3.698 1.2-1.73 2.688-3.265 1.49-1.538 2.93-2.98 1.2-1.152 2.257-2.256 1.105-1.153 1.92-2.258.866-1.152 1.346-2.353.528-1.2.528-2.545 0-1.44-.48-2.45-.432-1.008-1.2-1.68-.77-.673-1.826-.96-1.008-.337-2.16-.337-1.394 0-2.546.385-1.153.384-2.065.912-.913.48-1.537 1.057-.625.528-.96.817L24 39.98q.432-.48 1.297-1.152.864-.72 2.065-1.345 1.2-.624 2.69-1.056 1.488-.432 3.217-.432 5.234 0 7.827 2.45 2.642 2.4 2.642 6.82zM57.976 49.586q7.252.288 10.614 3.17Q72 55.636 72 60.584q0 2.21-.768 4.082-.72 1.873-2.258 3.218-1.488 1.345-3.794 2.113-2.305.77-5.475.77-1.248 0-2.545-.193t-2.4-.48q-1.106-.29-1.97-.577-.865-.288-1.25-.48l.865-3.89q.817.384 2.642 1.008 1.873.624 4.562.624 2.16 0 3.6-.48 1.49-.48 2.403-1.298.912-.816 1.296-1.873.43-1.105.43-2.306 0-1.825-.623-3.218-.624-1.44-2.21-2.4-1.584-.96-4.225-1.442-2.642-.528-6.676-.528.288-2.353.432-4.418.192-2.066.336-4.035.144-1.97.24-3.89.097-1.97.193-4.13h16.04v3.794h-12.15q-.048.72-.144 1.97-.096 1.2-.192 2.545-.096 1.296-.192 2.545-.096 1.25-.192 1.97z"/></g><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M23.977 8.002c-5.033.058-8.716-.12-11.727 1.54-1.506.832-2.697 2.237-3.355 3.99-.66 1.756-.897 3.838-.897 6.468v56c0 2.63.238 4.714.897 6.47.658 1.753 1.85 3.156 3.355 3.987 3.01 1.66 6.694 1.485 11.727 1.543H72.02c5.034-.058 8.717.118 11.728-1.543 1.506-.83 2.697-2.234 3.356-3.988.658-1.756.896-3.84.896-6.47V48.002h-4.002V76c0 2.37-.25 4.023-.64 5.063s-.81 1.487-1.544 1.892c-1.464.808-4.778.986-9.816 1.045H24c-5.04-.06-8.352-.237-9.816-1.045-.734-.405-1.153-.853-1.543-1.892C12.25 80.023 12 78.37 12 76V32c0-2.37.25-4.023.64-5.062.39-1.04.81-1.488 1.544-1.893 1.467-.81 4.783-.987 9.837-1.045H72c5.038.06 8.352.237 9.816 1.045.734.405 1.153.853 1.543 1.893.39 1.04.64 2.692.64 5.062v16H88V20c0-2.63-.238-4.712-.896-6.467-.66-1.754-1.85-3.16-3.356-3.99-3.01-1.66-6.694-1.483-11.727-1.54H72V16h-6V8.002H30V16h-6V8.002h-.022z" color="#000" fontFamily="sans-serif" whiteSpace="normal" overflow="visible" solidColor="#000000" fill="gray"/><path d="M30 0l-6 1v7h6V0zm42 0l-6 1v7h6V0z" color="#000" overflow="visible" fill="gray"/>'
            />
          </ul>
        </div>

        <div className="col-8">
          <this.state.activeView model={this.state.activeModel} />
        </div>
      </div>
    );
  }
});
