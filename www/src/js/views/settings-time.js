/** @jsx React.DOM */

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');

module.exports = React.createBackboneClass({

  dateChanged: function(event) {
    var date = event.target.value;
    this.props.model.save({'date': date}, {patch: true});
  },

  timeChanged: function(event) {
    var time = event.target.value;
    this.props.model.save({'time': time}, {patch: true});
  },

  ntpActiveCheckboxChanged: function(event) {
    this.setState({ntpActive: !this.state.ntpActive}); 
  },

  ntpServerNameChanged: function(event) {
    var ntpServerName = event.target.value;
    if (ntpServerName !== this.props.model.get('ntpServer')) {
      this.props.model.save({'ntpServer': ntpServerName}, {patch: true});
    }
  },

  timezoneSelectChanged: function(event) {
    var selected = event.target.value;
    if (selected != this.props.model.get('timezone')) {
      this.props.model.save({'timezone': selected}, {patch: true});
    }
  },

  getInitialState: function() {
    return {
      ntpActive: this.props.model.get('ntpServer') !== ''
    };
  },

  render: function() {
    var model = this.props.model;

    return (
      <div>
        <div className="row">
          <h2>Date &amp; time</h2>
        </div>
        <div className="row">
          <div className="col-2">
            <strong>Date</strong>
          </div>
          <div className="col-6">
            <input type="date"
                   disabled={this.state.ntpActive}
                   value={model.get('date')}
                   onChange={this.dateChanged} />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <strong>Time</strong>
          </div>
          <div className="col-6">
            <input type="time"
                   disabled={this.state.ntpActive}
                   value={model.get('time')}
                   onChange={this.timeChanged} />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <strong>Timezone</strong>
          </div>

          <div className="col-6">
            <select value={model.get('timezone')}
                    onChange={this.timezoneSelectChanged} >
              <option value="-12">(UTC-12:00) International Date Line West</option>
              <option value="-11">(UTC-11:00) Midway Island, Samoa</option>
              <option value="-10">(UTC-10:00) Hawaii</option>
              <option value="-9">(UTC-09:00) Alaska</option>
              <option value="-8">(UTC-08:00) Pacific Time (US & Canada)</option>
              <option value="-8">(UTC-08:00) Tijuana, Baja California</option>
              <option value="-7">(UTC-07:00) Arizona</option>
              <option value="-7">(UTC-07:00) Chihuahua, La Paz, Mazatlan</option>
              <option value="-7">(UTC-07:00) Mountain Time (US & Canada)</option>
              <option value="-6">(UTC-06:00) Central America</option>
              <option value="-6">(UTC-06:00) Central Time (US & Canada)</option>
              <option value="-6">(UTC-06:00) Guadalajara, Mexico City, Monterrey</option>
              <option value="-6">(UTC-06:00) Saskatchewan</option>
              <option value="-5">(UTC-05:00) Bogota, Lima, Quito, Rio Branco</option>
              <option value="-5">(UTC-05:00) Eastern Time (US & Canada)</option>
              <option value="-5">(UTC-05:00) Indiana (East)</option>
              <option value="-4">(UTC-04:00) Atlantic Time (Canada)</option>
              <option value="-4">(UTC-04:00) Caracas, La Paz</option>
              <option value="-4">(UTC-04:00) Manaus</option>
              <option value="-4">(UTC-04:00) Santiago</option>
              <option value="-3.5">(UTC-03:30) Newfoundland</option>
              <option value="-3">(UTC-03:00) Brasilia</option>
              <option value="-3">(UTC-03:00) Buenos Aires, Georgetown</option>
              <option value="-3">(UTC-03:00) Greenland</option>
              <option value="-3">(UTC-03:00) Montevideo</option>
              <option value="-2">(UTC-02:00) Mid-Atlantic</option>
              <option value="-1">(UTC-01:00) Cape Verde Is.</option>
              <option value="-1">(UTC-01:00) Azores</option>
              <option value="0">(UTC+00:00) Casablanca, Monrovia, Reykjavik</option>
              <option value="0">(UTC+00:00) Dublin, Edinburgh, Lisbon, London</option>
              <option value="1">(UTC+01:00) Amsterdam, Berlin, Rome, Stockholm, Vienna</option>
              <option value="1">(UTC+01:00) Belgrade, Budapest, Ljubljana, Prague</option>
              <option value="1">(UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option>
              <option value="1">(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
              <option value="1">(UTC+01:00) West Central Africa</option>
              <option value="2">(UTC+02:00) Amman</option>
              <option value="2">(UTC+02:00) Athens, Bucharest, Istanbul</option>
              <option value="2">(UTC+02:00) Beirut</option>
              <option value="2">(UTC+02:00) Cairo</option>
              <option value="2">(UTC+02:00) Harare, Pretoria</option>
              <option value="2">(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
              <option value="2">(UTC+02:00) Jerusalem</option>
              <option value="2">(UTC+02:00) Minsk</option>
              <option value="2">(UTC+02:00) Windhoek</option>
              <option value="3">(UTC+03:00) Kuwait, Riyadh, Baghdad</option>
              <option value="3">(UTC+03:00) Moscow, St. Petersburg, Volgograd</option>
              <option value="3">(UTC+03:00) Nairobi</option>
              <option value="3">(UTC+03:00) Tbilisi</option>
              <option value="3.5">(UTC+03:30) Tehran</option>
              <option value="4">(UTC+04:00) Abu Dhabi, Muscat</option>
              <option value="4">(UTC+04:00) Baku</option>
              <option value="4">(UTC+04:00) Yerevan</option>
              <option value="4.5">(UTC+04:30) Kabul</option>
              <option value="5">(UTC+05:00) Yekaterinburg</option>
              <option value="5">(UTC+05:00) Islamabad, Karachi, Tashkent</option>
              <option value="5.5">(UTC+05:30) Sri Jayawardenapura</option>
              <option value="5.5">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
              <option value="5.75">(UTC+05:45) Kathmandu</option>
              <option value="6">(UTC+06:00) Almaty, Novosibirsk</option>
              <option value="6">(UTC+06:00) Astana, Dhaka</option>
              <option value="6.5">(UTC+06:30) Rangoon</option>
              <option value="7">(UTC+07:00) Bangkok, Hanoi, Jakarta</option>
              <option value="7">(UTC+07:00) Krasnoyarsk</option>
              <option value="8">(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
              <option value="8">(UTC+08:00) Kuala Lumpur, Singapore</option>
              <option value="8">(UTC+08:00) Irkutsk, Ulaan Bataar</option>
              <option value="8">(UTC+08:00) Perth</option>
              <option value="8">(UTC+08:00) Taipei</option>
              <option value="9">(UTC+09:00) Osaka, Sapporo, Tokyo</option>
              <option value="9">(UTC+09:00) Seoul</option>
              <option value="9">(UTC+09:00) Yakutsk</option>
              <option value="9.5">(UTC+09:30) Adelaide</option>
              <option value="9.5">(UTC+09:30) Darwin</option>
              <option value="10">(UTC+10:00) Brisbane</option>
              <option value="10">(UTC+10:00) Canberra, Melbourne, Sydney</option>
              <option value="10">(UTC+10:00) Hobart</option>
              <option value="10">(UTC+10:00) Guam, Port Moresby</option>
              <option value="10">(UTC+10:00) Vladivostok</option>
              <option value="11">(UTC+11:00) Magadan, Solomon Is., New Caledonia</option>
              <option value="12">(UTC+12:00) Auckland, Wellington</option>
              <option value="12">(UTC+12:00) Fiji, Kamchatka, Marshall Is.</option>
              <option value="13">(UTC+13:00) Nuku\'alofa</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <strong>Custom NTP server</strong>
          </div>
          <div className="col-6">
            <div className="col-1">
              <input type="checkbox"
                     checked={this.state.ntpActive}
                     onChange={this.ntpActiveCheckboxChanged} />
            </div>
            <div className="col-5">
              <input type="text"
                     placeholder="URL"
                     disabled={!this.state.ntpActive}
                     value={model.get('ntpServer')}
                     onChange={this.ntpServerNameChanged} />
            </div>
          </div>
        </div>

      </div>
    );
  }

});
