'use strict';
import React, { Component } from 'react';
import AllZones from './AllZones'

var Device = React.createClass({

  render() {
    var deviceName = this.props.device.name;

    if (deviceName) {
      deviceName = (<h5>Device: {deviceName}</h5>)
    }

    return(
      <div>
        {deviceName}
        < AllZones device={this.props.device} zones={this.props.zones} waterZone={this.props.waterZone} />
      </div>
    )
  }
});

export default Device