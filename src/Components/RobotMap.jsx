import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Layer } from 'react-mapbox-gl';

class RobotMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lat: 37.7749,
        lon: 122.4194
      };
    }
    render() {
      const Map = new ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoiZ2FycmV0dG1vb3JlIiwiYSI6ImNqdHQ0dWMyZzE3bDMzemxsNDJkM3hrdnoifQ.1v2jNBqVj1p6jhAKJkHY0A',
        // center: [this.state.lon, this.state.lat]
      });
      return (
        <>
          <h4>ROBOT MAP PAGE</h4>
          <p>HARSH ZONES BELOW / AVOID</p>
          <Map
            height='200px'
            style={`mapbox://styles/garrettmoore/cjtujog6o02yx1fnz0psutn0a`}
            zoom={[0.5]}
            // center={[this.state.lon, this.state.lat]}
            containerStyle={{ height: '40em' }}>
            <Layer
            style={`mapbox://styles/garrettmoore/cjtujog6o02yx1fnz0psutn0a`}
            // center={[this.state.lon, this.state.lat]}
            />
          </Map>
          
        </>
      );
    }
  }
  
  export default RobotMap;
  