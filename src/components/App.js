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
             userId: "",
             deviceId: "",
           }
  },

  headers() {
    return {"Authorization": "Bearer ",
            "Content-Type": "application/json"}
  },

  componentDidMount() {
    console.log("env variable", process.env.RACHIO_ACCESS_TOKEN)
    this.getUserId()
  },

  getUserId() {
    $.ajax({
      url: "https://api.rach.io/1/public/person/info",
      type: 'GET',
      headers:  this.headers(),
      success: (response) => {
        console.log("retrieve userId", response)
        this.setState({ userId: response.id})
        console.log("userId as state", this.state.userId)

      },
      error: (error) => {
        console.log("error", error);
      },
    })
  },

  getDevices() {
    $.ajax({
      url: "https://api.rach.io/1/public/${this.state.userId}",
      type: 'GET',
      headers: this.headerData,
      success: (response) => {
        console.log("retrieve devices", response)
        const deviceId = response.devices;
        this.setState({ deviceId: deviceId})
      }
    })
  },

  getZones() {
    $.ajax({
      url: "https://api.rach.io/1/public/device/${deviceId}",
      type: 'GET',
      headers: this.headerData,
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
      headers: this.headerData,
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