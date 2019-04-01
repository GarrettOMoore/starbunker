import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import WorldMap from './WorldMap';
import RobotMap from './RobotMap';
import StarbucksMap from './StarbucksMap';
import img from '../Images/FrappyHourAd.png';



const Frappy = (props) => {

    return (
        <section className='Frappy' style={{maxWidth: "100%"}}>
            <img src={img} className='frappy' width="100%" />
        </section>
    )
}

export default Frappy