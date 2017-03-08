
import React from 'react';

import Snap from '../models/snap';
import DeviceInfo from '../models/device-info';


export default class SnapView extends React.Component {
  state = {
    model: null,
    deviceInfo: null
  }

  componentDidMount() {
    (new Snap({id: this.props.params.id})).fetch({
        success: (snap) => this.setState({model: snap})
      });
  
    (new DeviceInfo()).fetch({
        success: (deviceInfo) => this.setState({deviceInfo: deviceInfo})
      });
  }

  render() {
    if (this.state.model == null) {
      return null; // XXX: placeholder?
    }

    const model = this.state.model;
    const installDate = model.get('install_date');
    const description = model.get('description');

    const deviceInfo = this.state.deviceInfo;
    const interfaces = deviceInfo && deviceInfo.get('interfaces');

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
            <div className="b-snap__developer">By {model.get('developer')}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-7"></div>

{/*
          <div id="enabler-button" className="col-2" style="display: {{#if isInstalled}}block{{else}}none{{/if}}">
            {{> enabler}}
          </div>
*/}

{/*
          <div id="installer-button" className="{{#if isInstalled}}col-2{{else}}col-5{{/if}}">
            {{> installer}}

            <div id="progressbarwrapper" style={{border: "1px", borderRadius: "10px", marginTop: "1em", width: "100%", height: "0.5em"}}>
              <div id="progress" style="background-color: #003399; width: {{ download_progress }}%; height: 0.5em">
              </div>
            </div>

            <div style="width: 100%; height: 23px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">
                <small id="tasksummary">{{ task_summary }}</small>
            </div>
          </div>
*/}
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <ul className="p-list--divided" style={{marginRight: "3em"}}>
            <li className="p-list__item">
              Size
              <span className="b-snap__size u-float--right">{model.get('size')}</span>
            </li>

            <li className="p-list__item">
                Version
                <span className="b-snap__version u-float--right">{model.get('version')}</span>
            </li>

            <li className="p-list__item">
                Channel
                <span className="b-snap__version u-float--right">{model.get('channel')}</span>
            </li>

            {installDate &&
            <li className="p-list__item">
                Updated
                <span className="b-snap__version u-float--right">{installDate}</span>
            </li>
            }
          </ul>
        </div>

        {interfaces && 
        <div className="col-5" style={{border: "1px dotted #cdcdcd", padding: "1em 1em", height: "15em", overflowX: "hidden", overflowY: "hidden"}}>
          <h3>Interfaces</h3>
          <div id="interface-list">
            <li>N/A</li>
          </div>
        </div>
        }
      </div>

      {description &&
      <div className="row" style={{paddingBottom: "3em"}}>
        <div className="col-8">
          <h3>About</h3>
          <p>{description}</p>
        </div>
      </div>
      }
      </div>
    );
  }
}