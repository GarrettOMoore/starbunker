import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Layer } from 'react-mapbox-gl';
import { Container } from 'react-bootstrap';

class StarbucksMap extends Component {
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
          <h3>Find a Starbunker near you!</h3>
        <Map
            height='200px'
            style={`mapbox://styles/garrettmoore/cjtuh2gkn00ja1gt3xa94pqmo`}
            zoom={[0.5]}
            // center={[this.state.lon, this.state.lat]}
            containerStyle={{ height: '40em' }}>

            <Layer
            style={`https://api.mapbox.com/styles/v1/garrettmoore/cjtuh2gkn00ja1gt3xa94pqmo.html?fresh=true&title=true&access_token=pk.eyJ1IjoiZ2FycmV0dG1vb3JlIiwiYSI6ImNqc294aTc3bzByZXQzeW14dTlmbmkwamwifQ.un-bDQF-7GfJMc0NfTRpLg#0.6/0.000000/0.000000/0`}
            // center={[this.state.lon, this.state.lat]}
            />
        </Map>

        </>
      );
    }
  }
  
  export default StarbucksMap;
  