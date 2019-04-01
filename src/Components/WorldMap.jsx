import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import RobotMap from './RobotMap';
import StarbucksMap from './StarbucksMap';
import { Layer } from 'react-mapbox-gl';

class WorldMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        markers: [],
        lat: 37.7749,
        lon: 122.4194,
        humansAlive: null
      };
    }
   
    // componentDidMount() {
    //    let population = 3467856
    //     setInterval((e)=>{
    //         this.setState({
    //             humansAlive: population - 1
    //         })
    //     }, 500)
    // }
   
    render() {
      const Map = new ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoiZ2FycmV0dG1vb3JlIiwiYSI6ImNqdHQ0dWMyZzE3bDMzemxsNDJkM3hrdnoifQ.1v2jNBqVj1p6jhAKJkHY0A',
        center: [this.state.lon, this.state.lat]
      });

      return (
        <>
          {/* <p>Ominous tagline here</p> */}
          {/* <h4>Currently {this.state.humansAlive} Humans Alive...</h4> */}
          <Map
            height='200px'
            style={`mapbox://styles/garrettmoore/cjtue98zq02341fmk3f1n4spc`}
            zoom={[1.5]}
            // center={[this.state.lon, this.state.lat]}
            containerStyle={{ height: '40em' }}>
            <Layer
              style={`mapbox://styles/garrettmoore/cjtue98zq02341fmk3f1n4spc`}
             />

          </Map>


        </>
      );
    }
  }
  
  export default WorldMap;
  