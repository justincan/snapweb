import React from 'react';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';


export default class Token extends React.Component {
  state = {
    cookie: ''
  };

  handleInput = (event) => {
    this.setState({cookie: event.target.value});
  };

  handleSubmit = (event) => {
    Cookies.set('SM', token);
    browserHistory.push('/');
  };

  render() {
    return (
      <div className="region-token">
        <div className="inner-wrapper">
          <div className="b-headline seven-col last-col">
            <div className="row" id="token-submit-form">
              <h2>Access Control</h2>
              <div className="p-card--highlighted" style={{display: "block"}}>
                <div>
                  Please confirm that you are authorized to connect to this interface.
                </div>
                <form>
                  <fieldset>
                    <div>
                      <label htmlFor="token">Snapweb Access Token</label>
                      <input
                        type="text"
                        placeholder="Enter your token here..."
                        value={this.state.cookie}
                        onChange={this.handleInput} />
                    </div>
                    <div>
                      <button
                        className="p-button--positive"
                        style={{marginBottom: "1em"}}
                        onClick={this.handleSubmit}
                        >
                        Submit
                      </button>
                      <label className="statusmessage" style={{display: "inline-block", marginLeft: "1em"}}>
                      </label>
                    </div>
                  </fieldset>
                </form>
                <div>
                  To generate a new token, use the following command on the system you want to access (either on the console or via ssh) :
                  <pre>sudo snapweb.generate-token</pre>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}