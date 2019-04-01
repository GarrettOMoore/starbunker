import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import Logo from './Images/Starbunker Logo.png';
import WorldMap from './Components/WorldMap'
import SignUp from './Components/SignUp'
import FindStarbucks from './Components/FindStarbucks'
import StarbucksMap from './Components/StarbucksMap'
import FindRobots from './Components/FindRobots'
import News from './Components/News'
import Toggle from './Components/Toggle'
import Tab from './Components/Tab'

import RobotMap from './Components/RobotMap'
import {Counter} from './Components/Counter';
import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">STARBUNKER</h1>
        <Container>
        <Image src={Logo} fluid />
        <Counter />
        <Toggle />
        <News />
        <Tab />
        </Container>
      </div>
    );
  }
}

export default App;
