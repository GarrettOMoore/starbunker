import React, { Component } from 'react';
import tab from '../Images/StarbunkerTabBar.png';

const tabBar = (props) => {

    return (
        <section className='Frappy' style={{maxWidth: "100%"}}>
            <img src={tab} width="100%" />
        </section>
    )
}

export default tabBar