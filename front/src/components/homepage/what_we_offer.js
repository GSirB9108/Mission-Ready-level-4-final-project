import React from 'react'
import './what_we_offer.css';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
//import { Card,CardMedia } from '@material-ui/core';

const styles = makeStyles({
    /* card: {
        position: 'relative',
        width: '101px',
        height:'101px',
    } */
    myRadioGroupStyle: {
        display:"block",
    }
}); 

export default function WhatWeOffer() {
    const classes=styles();
    const [activeButton, setActiveButton]=useState('laptop1');

    var image;

    const handleClick= (z,value) => {
        setActiveButton(value)
    }

    if (activeButton ==='laptop1'){
        image= <img src="project1.png" alt="p1" className="projectimages"/>;
    } else if (activeButton ==='laptop2'){
        image= <img src="project2.png" alt="p2" className="projectimages"/>;
    } else if (activeButton ==='laptop3'){
        image= <img src="project3.png" alt="p3" className="projectimages"/>;
    } else if (activeButton ==='laptop4'){
        image= <img src="project4.png" alt="p4" className="projectimages"/>;
    }

    const handleClickImage = (e) => {
        if(e.target.alt === 'bluesquare1'){
            setActiveButton('laptop1')
        } else if (e.target.alt ==='bluesquare2'){
            setActiveButton('laptop2')
        }else if (e.target.alt ==='bluesquare3'){
            setActiveButton('laptop3')
        }else if (e.target.alt ==='bluesquare4'){
            setActiveButton('laptop4')
        }
    }

    return (
        <div className="whatweoffer">
            <div className="left">
                <div className="lefttop">
                    <h1>What we offer</h1>
                    <p>the creative problem solving programme is a series of digital creation projects aimed to encourage self-motvation and student agency, designed by New Zealand's leading IT industry expoerts and schools.</p>
                </div>

                <div className="leftbot">
                    <h3>What will students create?</h3>
                    <div className="imgcontainer">
                        <img src="bluesquare.png" alt="bluesquare1" className="bluesquares"  onClick={handleClickImage}/>

                        <img src="bluesquare.png" alt="bluesquare2" className="bluesquares" onClick={handleClickImage}/>

                        <img src="bluesquare.png" alt="bluesquare3" className="bluesquares" onClick={handleClickImage}/>

                        <img src="bluesquare.png" alt="bluesquare4" className="bluesquares" onClick={handleClickImage}/>

                        <img src="frame.png" alt="frame" className= "pics" id="test1"/>
                        <img src="joystick.png" alt="joystick" className= "pics" id="test2"/>
                        <img src="robot.png" alt="robot" className= "pics" id="test3" />
                        <img src="ar.png" alt="ar" className= "pics" id="test4"/>
                        
                    </div>

                    <div className="text">
                        <p className="texts" id="texttest1">ANIMATION</p>
                        <p className="texts" id="texttest2">GAMES</p>
                        <p className="texts" id="texttest3">CHATBOTS</p>
                        <p className="texts" id="texttest4">AUGMENTED <br/> </p>
                        <br/>
                        <p className="texts" id="texttest5">REALITY</p>
                    </div>

                </div>
            </div>

            <div className="right">
                <div className="righttop"> 
                    {image}
                    {/* <img src="project1.png" alt="p1" className="projectimages" id="laptop1"/>
                    <img src="project2.png" alt="p2" className="projectimages"id="laptop2"/>
                    <img src="project3.png" alt="p3" className="projectimages"id="laptop3"/>
                    <img src="project4.png" alt="p4" className="projectimages"id="laptop4"/> */}
                </div>

                <div className="rightbot">
                    <RadioGroup row className={classes.myRadioGroupStyle} value={activeButton} onChange={handleClick}>
                        <Radio value="laptop1"></Radio>
                        <Radio value="laptop2"></Radio>
                        <Radio value="laptop3"></Radio>
                        <Radio value="laptop4"></Radio>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}
