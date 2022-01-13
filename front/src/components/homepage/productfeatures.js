import React from 'react'
import './productfeatures.css';
import { Button } from '@material-ui/core';
import { useState } from 'react';


export default function Productfeatures() {

    const [activetext, setactivetext]=useState('KEY COMPETENCIES');

    const handleclick = (e) => {
        setactivetext(e.target.innerText);
    }

    let headtext;
    let subheadtext;

    let bodytext1;
    let bodytext2;
    let bodytext3;
    let bodytext4;
    let bodytext5;

    let subbodytext1;
    let subbodytext2;
    let subbodytext3;
    let subbodytext4;
    let subbodytext5;

    let logopic1;
    let logopic2;
    let logopic3;
    let logopic4;
    let logopic5;

    if (activetext ==='KEY COMPETENCIES'){
        headtext= <h2>Enhance key competencies</h2>;
        subheadtext= <p>the programme enhances capabilities of students in the 5 Key Competencies identifed in the New Zealand Curriculum:</p>

        bodytext1= <h4 className="indivtextactual">THINKING</h4>;
        bodytext2= <h4 className="indivtextactual">DISCERNING CODES</h4>;
        bodytext3= <h4 className="indivtextactual">SELF-MANAGEMENT</h4>
        bodytext4= <h4 className="indivtextactual">RELATIONSHIPS WITH PEERS</h4>
        bodytext5= <h4 className="indivtextactual">PARTICIPATION AND COLLABORATION</h4>;   

        subbodytext1= <p className="indivtextactual"> In particular the programme focused on problem solving, design thinking and computational thinking.</p>;
        subbodytext2= <p className="indivtextactual">Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</p>;
        subbodytext3= <p className="indivtextactual">Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p>
        subbodytext4= <p className="indivtextactual">The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</p>
        subbodytext5= <p className="indivtextactual">The programme encourages students to be involved in communitites, such as family, whanau, school, and contribute and make connections with other people.</p>;  

        logopic1= <img src="logostaronly.png" alt="logo" className="logo"/>
        logopic2=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic3=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic4=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic5=<img src="logostaronly.png" alt="logo" className="logo"/>

    } else if (activetext ==='IR4.0') {
        headtext = <h2>Future-Proof Students for a career in IR4.0</h2>
        subheadtext = <p>Designed with IT industry experts, the programme develops the cognitive and social competencies students will find applicable to jobs and careers in the Fourth Industrial Revolution (IR4). Below are some of these competencies.</p>
        
        bodytext1= <h4 className="indivtextactual">CREATIVITIY</h4>;
        bodytext2= <h4 className="indivtextactual">critical thinking & problem solving skills</h4>;
        bodytext3= <h4 className="indivtextactual">communication & collaboration skills</h4>
        bodytext4= <h4 className="indivtextactual">technology skills</h4>

        subbodytext1= <p className="indivtextactual"> text</p>
        subbodytext2= <p className="indivtextactual"> text</p>
        subbodytext3= <p className="indivtextactual"> text</p>
        subbodytext4= <p className="indivtextactual"> text</p>

        logopic1= <img src="logostaronly.png" alt="logo" className="logo"/>
        logopic2=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic3=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic4=<img src="logostaronly.png" alt="logo" className="logo"/>

    } else if (activetext ==='LEARNING PATHWAYS') {
        headtext = <h2>learning pathways</h2>
        subheadtext = <p>text placeholder</p>

        bodytext1= <h4 className="indivtextactual">text</h4>;
        bodytext2= <h4 className="indivtextactual">text</h4>;
        bodytext3= <h4 className="indivtextactual">text</h4>
        bodytext4= <h4 className="indivtextactual">text</h4>

        subbodytext1= <p className="indivtextactual">text</p>
        subbodytext2= <p className="indivtextactual">text</p>
        subbodytext3= <p className="indivtextactual">text</p>
        subbodytext4= <p className="indivtextactual">text</p>

        logopic1= <img src="logostaronly.png" alt="logo" className="logo"/>
        logopic2=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic3=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic4=<img src="logostaronly.png" alt="logo" className="logo"/>
    } else if (activetext ==='DIGITAL TECHNOLOGIES') {
        headtext = <h2>DIGITAL TECHNOLOGIES</h2>
        subheadtext = <p>text placeholder</p>

        bodytext1= <h4 className="indivtextactual">text</h4>;
        bodytext2= <h4 className="indivtextactual">text</h4>;
        bodytext3= <h4 className="indivtextactual">text</h4>
        bodytext4= <h4 className="indivtextactual">text</h4>

        subbodytext1= <p className="indivtextactual">text</p>
        subbodytext2= <p className="indivtextactual">text</p>
        subbodytext3= <p className="indivtextactual">text</p>
        subbodytext4= <p className="indivtextactual">text</p>

        logopic1= <img src="logostaronly.png" alt="logo" className="logo"/>
        logopic2=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic3=<img src="logostaronly.png" alt="logo" className="logo"/>
        logopic4=<img src="logostaronly.png" alt="logo" className="logo"/>
    }
    
    return (
        <div className="productfeatures">
            
            <h1 className="header">How our programme helps teachers and schools</h1>

            <div className="subheader">
                <Button onClick={handleclick} >LEARNING PATHWAYS</Button>
                <Button onClick={handleclick} >DIGITAL TECHNOLOGIES</Button>
                <Button onClick={handleclick} >KEY COMPETENCIES</Button>
                <Button onClick={handleclick} >IR4.0</Button>
            </div>

            <div className="greybox">
            {headtext}
            {subheadtext}  

            <div>
                <div className="indivlogo">
                    <div>
                        {logopic1}
                    </div>

                    <div className="indivtext">
                        {bodytext1}
                        {subbodytext1}
                    </div>
                </div>

                <div className="indivlogo">
                    <div>
                    {logopic2}
                    </div>

                    <div className="indivtext">
                        {bodytext2}
                        {subbodytext2}
                    </div>
                </div>

                <div className="indivlogo">
                    <div>
                    {logopic3}
                    </div>

                    <div className="indivtext">
                        {bodytext3}
                        {subbodytext3}
                    </div>
                </div>

                <div className="indivlogo">
                    <div>
                    {logopic4}
                    </div>

                    <div className="indivtext">
                        {bodytext4}
                        {subbodytext4}
                    </div>
                </div>

                <div className="indivlogo">
                    <div>
                        {logopic5}
                    </div>

                    <div className="indivtext">
                        {bodytext5}
                        {subbodytext5}
                    </div>
                </div>

            </div>

            </div>
        </div>
    )
}
