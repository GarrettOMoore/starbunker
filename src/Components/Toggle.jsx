import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import WorldMap from './WorldMap';
import RobotMap from './RobotMap';
import StarbucksMap from './StarbucksMap';
import Frappy from './Frappy';

const Toggle = (props) => {

    return (
        <Router>
        <div className='button-box'>
        <Link to='/WorldMap'><Button type='text'variant="dark" >World</Button></Link>
        <Link to='/RobotMap'><Button type='text'variant="danger">Robot</Button></Link>
        <Link to='/StarbucksMap'><Button type='text'variant="success">Starbunker</Button></Link>
        </div>
        <Route path='/WorldMap' component={WorldMap} />
        <Route path='/RobotMap' component={RobotMap} />
        <Route path='/StarbucksMap' component={StarbucksMap} />
        <Frappy/>
        </Router>
    )
}

export default Toggle