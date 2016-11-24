/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var Radio = require('backbone.radio');
var Config = require('../config.js');
var chan = Radio.channel('root');


module.exports = React.createBackboneClass({

  sendAction: function(action) {
    Backbone.ajax({
                url: Config.DEVICE_ACTION,
                contentType: 'application/json',
                type: 'POST',
                data: { 'actionType': action },
                processData: false,
                async: true,
                error: function(jqXHR, textStatus, errorThrown) {
                  chan.command('alert:error',
                               new Backbone.Model({message: errorThrown}));
                }
              });
  },

  restart: function() {
    this.sendAction('restart');
  },

  powerOff: function() {
    this.sendAction('power-off');
  },

  render: function() {
    var model = this.props.model;

    return (
      <div>
        <h2>Device information</h2>
        <div>
          <div className="eight-col last-col">
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name three-col">Device name</div>
              <div className="five-col last-col" id="info-device-name">{ model.get('deviceName') } </div>
            </div>
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name three-col">Brand</div>
              <div className="five-col last-col" id="info-brand">{model.get('brand')}</div>
            </div>
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name three-col">Model</div>
              <div className="five-col last-col" id="info-model">{model.get('model')}</div>
            </div>
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name three-col">Serial</div>
              <div className="five-col last-col" id="info-serial">{model.get('serial')}</div>
            </div>
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name three-col">Operating System</div>
              <div className="five-col last-col" id="info-operating-system">{model.get('operatingSystem')}</div>
            </div>
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name  three-col">Interfaces</div>
              <div className="five-col last-col" id="info-interfaces">{model.get('interfaces')}</div>
            </div>
            <div className="row no-border eight-col last-col">
              <div className="b-settings__content__row__name three-col">Uptime</div>
              <div className="five-col last-col" id="info-uptime">{model.get('uptime')}</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>Power</h2>
        <div className="row">
            <div className="col-2">
                <p>
                  <button onClick={this.restart} type="p-button--neutral" name="">Restart</button>
                </p>
            </div>
            <div className="col-2">
              <p>
                <button onClick={this.powerOff} type="p-button--neutral" name="">Power off</button>
              </p>
            </div>
        </div>

        <hr />

        <h2>Factory settings</h2>
        <div className="row">
            <div className="col-3">
                <button type="p-button--neutral" name="">Reset to factory settings</button>
            </div>
        </div>
      </div>
    );
  }

});
