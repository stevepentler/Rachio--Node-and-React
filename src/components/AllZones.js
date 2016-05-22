'use strict';

import React, { Component } from 'react';
import Zone from './Zone';

var AllZones = React.createClass({

  render() {
    let zones;
    if (Object.keys(this.props.zones).length != 0) {
      zones = this.props.zones.map((zone) => {
        // console.log("single zone ", zone)
        return (
          <div key={zone.id}>
            < Zone zone={zone} waterZone={this.props.waterZone} />
          </div>
        )
      })
    }
    return (
      <div key="zones">
        {zones}
      </div>
    )
  }
});

export default AllZones;