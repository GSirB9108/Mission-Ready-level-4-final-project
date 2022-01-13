import React from 'react'
import './banner.css';
import { Button } from '@material-ui/core';

export default function Banner() {
    return (
        <div className="bannercontainer">
            <div className="bannertext">
            <h1>Prepare young minds for a better future.</h1>
            <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
            <Button> Learn More</Button>
            <Button> Sign up</Button>
            <p>*Basic subscription includes the first 15 projects free of charge.</p>
            </div>
            <div>
            <img src="banner_trim.png" alt="banner" className="bannerimg"/>
            </div>
            
        </div>
    )
}
