'use strict';

import '../assets/stylesheets/style.scss';
import $ from 'jquery';
import React, { Component } from 'react';
import Header from './Header';
import Device from './Device';

request(options, callback);

var App = React.createClass({

  const headerData =
    return { "Authorization" => "Bearer ${process.env.RACHIO_ACCESS_TOKEN}",
             "Content-Type" => "application/json" },

  getInitialState() {
    return { zones: {},
             device: {}
           }
  },

  componentDidMount() {
    this.getDevices().then(this.getZones())
  },

  getUserId() {
    $.ajax({
      url: "https://api.rach.io/1/public/",
      type: 'GET',
      headers: headerData,
      success: (response) => {
        console.log("retrieve zones", response)
        this.setState({ zones: response})
      }
    })
  },

  getZones() {
    $.ajax({
      url: '/api/v1/data',
      type: 'GET',
      headers: headerData,
      success: (response) => {
        console.log("retrieve zones", response)
        this.setState({ zones: response})
      }
    })
  },

  getDevices() {
    $.ajax({
      url: '/api/v1/devices',
      type: 'GET',
      headers: headerData,
      success: (response) => {
        console.log("retrieve devices", response)
        this.setState({ device: response})
      }
    })
  },

  waterZone(zoneData) {
    console.log("zonedata", zoneData)
    $.ajax({
      url: "https://api.rach.io/1/public/" + zoneData.zoneId,
      type: 'PUT',
      data: zoneData,
      headers: headerData,
    }).then(console.log("watering " + zoneData.zoneId + " for " + zoneData.zoneDuration +  " seconds"))
  },


  render() {
    return (
      <div className="container">
        < Header />
        < Device device={this.state.device} zones={this.state.zones} waterZone={this.waterZone} />
      </div>
    )
  }
});

export default App;