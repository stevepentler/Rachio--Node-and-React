'use strict';

import '../assets/stylesheets/style.scss';
import $ from 'jquery';
import React, { Component } from 'react';
import Header from './Header';
import Device from './Device';

var App = React.createClass({

  getInitialState() {
    return { zones: {},
             device: {},
             userId: ""
           }
  },

  headers() {
    return {"Authorization": "Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e",
            "Content-Type": "application/json"}
  },

  componentDidMount() {
    console.log("env variable", process.env.RACHIO_ACCESS_TOKEN)
    this.getUserId();
  },

  getUserId() {
    $.ajax({
      url: "https://api.rach.io/1/public/person/info",
      type: 'GET',
      headers:  this.headers(),
      success: (response) => {
        this.setState({ userId: response.id})
      },
      error: (error) => {
        console.log("error", error);
      },
    }).then(this.getDevice);
  },

  getDevice() {
    console.log("userId as state", this.state.userId)
    $.ajax({
      url: "https://api.rach.io/1/public/person/" + this.state.userId,
      type: 'GET',
      headers: this.headers(),
      success: (response) => {
        console.log("retrieve devices", response.devices[0])
        const firstDevice = response.devices[0]
        this.setState({ device: firstDevice})
      },
      error: (error) => {
        console.log("error", error);
      },
    })
  },

  getZones() {
    $.ajax({
      url: "https://api.rach.io/1/public/device/${deviceId}",
      type: 'GET',
      headers: this.headers(),
      success: (response) => {
        console.log("retrieve zones", response)
        this.setState({ zones: response.zones})
      }
    })
  },

  waterZone(zoneData) {
    console.log("zonedata", zoneData)
    $.ajax({
      url: "https://api.rach.io/1/public/" + zoneData.zoneId,
      type: 'PUT',
      data: zoneData,
      headers: this.headers(),
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