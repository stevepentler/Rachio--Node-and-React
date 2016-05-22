var WateringForm = React.createClass({
  getInitialState() {
    return { watering: false,
             duration: 0 };
  },

  handleWater(event) {
    event.preventDefault();
    var zoneData = {
      zoneId: this.refs.zoneId.value,
      zoneDuration: this.refs.zoneDuration.value * 60
    }
    this.props.waterZone(zoneData);
    this.setState( { watering: true,
                     duration: this.refs.zoneDuration.value
                   });
  },

  render() {
    var zone = this.props.zone
    var previousDurationMinutes = parseInt(zone.lastWateredDuration / 60.0)
    var zoneDuration = this.state.duration;
    var formState;
    if (this.state.watering) {
      return (
        <div className="center">
          <h5 className="blue-font">Watering {zone.name}</h5>
          <h6> for {zoneDuration} minutes</h6>
          <img src={zone.customNozzle.imageUrl} height='50px' width="auto"/>
          <img src={zone.customNozzle.imageUrl} height='50px' width="auto"/>
          <img src={zone.customNozzle.imageUrl} height='50px' width="auto"/>
          <img src={zone.customNozzle.imageUrl} height='50px' width="auto"/>
          <img src={zone.customNozzle.imageUrl} height='50px' width="auto"/>
        </div>
      )
    } else {
      return (
        <form className="center">
          <p className="center">Watering Duration (mins)</p>
          <p className="range-field">
            <input type="range" ref="zoneDuration" max="180" min="1" placeholder={previousDurationMinutes+ " mins"} width="50" required />
          </p>
          <input type="hidden" ref="zoneId" value={zone.id} />
          <button type="submit" onClick={this.handleWater} className="btn center">Water {zone.name}</button>
        </form>
      )
    }

    return(
      {formState}
    )
  }
})