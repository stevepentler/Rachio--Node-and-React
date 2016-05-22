'use strict';

var AllZones = React.createClass({

  render() {
    let zones;
    if (Object.keys(this.props.zones).length != 0) {
      zones = this.props.zones.map((zone) => {
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
