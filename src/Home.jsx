import React from 'react';
import Common from './Common';
import web from '../src/images/shipper.jpg';

const Home = () =>{
    return(
        <>
            <Common name='Be a great developer with ' imgsrc={web} visit="/service" btname="Get Started" />
        </>
    );
}

export default Home;
