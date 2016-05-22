'use strict';

var Device = React.createClass({

  render() {
    var device_id = this.props.device.device_id;
    var preloader = (
      <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
    )

    if (!device_id) {
      device_id = preloader;
    } else {
      device_id = (<h5>Device ID: {device_id}</h5>)
    }

    return(
      <div>
        {device_id}
        < AllZones device={this.props.device} zones={this.props.zones} waterZone={this.props.waterZone} />
      </div>
    )
  }
});