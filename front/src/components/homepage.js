import React from 'react'
import Topbar from './homepage/topbar';
import Banner from './homepage/banner';
import WhatWeOffer from './homepage/what_we_offer';
import OnelineFourpic from './homepage/onelinefourpic';
import Productfeatures from './homepage/productfeatures';
import Adquestion from './homepage/adquestion';
import Footer from './homepage/footer';
//import Homepage from './components/homepage';

export default function Homepage() {
    return (
        <div>
            <Topbar/>    
            <Banner/>
            <WhatWeOffer/>
            <OnelineFourpic/>
            <Productfeatures/>
            <Adquestion/>
            <Footer/>
        </div>
    )
}
