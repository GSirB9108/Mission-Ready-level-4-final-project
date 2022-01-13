import React from 'react'
import { Button } from '@material-ui/core';
import './adquestion.css';

export default function Adquestion() {
    return (
        <div className="adquestion">
            
            <div className="adleft">
            <img src="picforq.png" alt="pic for q" className="picforqimg"/>
            </div>

            <div className="adright">
            <h1>What are you waiting for?</h1>
            <p>Start teaching Digital Technologies today.</p>
            <p>If you need more information, we are happy to answer any questions you may have.</p>
            <Button>ENQUIRE NOW</Button>
            <Button>SIGN UP</Button>
            </div>

        </div>
    )
}
