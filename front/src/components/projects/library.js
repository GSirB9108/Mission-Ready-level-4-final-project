import React from 'react'
import './library.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Library() {
    const [projects, setProjects]= useState([]);
    const [projectsFinal, setProjectsFinal]= useState([]);

    const [subscriptiontype, setSubscriptiontype] = useState({
        free: false,
        premium: false,
    });

    const {free, premium} = subscriptiontype;

    const freefilter = projectsFinal.filter(el => el.subscription==="free")
    const premiumfilter = projectsFinal.filter(el => el.subscription==="premium")
    const beginnerfilter = projectsFinal.filter(el => el.course==="beginner")
    const intermediatefilter= projectsFinal.filter(el => el.course==="intermediate");
    const advancedfilter= projectsFinal.filter(el => el.course==="advanced")

    const handleCheckSubscription = (event) => {
        setSubscriptiontype({...subscriptiontype, [event.target.name]: event.target.checked });
        subscriptionfilter(event);
        
    }

    const subscriptionfilter=(event)=> {
        
        if(event.target.name==="free"){       
            const final_array = freefilter.concat(projects);
            finalarraysetup(final_array,event)
        }

        if(event.target.name==="premium"){
            const final_array = premiumfilter.concat(projects);
            finalarraysetup(final_array,event)
        }
        
    }

    useEffect(() => {
        axios.get("http://localhost:4000/projects")
        .then(response => {
            setProjects(response.data);
            setProjectsFinal(response.data);
        })
    },[]);

    const topFunction=()=> {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    const filterdifficulty = (event) => {

        if (event.target.innerText=== "BEGINNER"){
            const final_array = beginnerfilter.concat(projects);
            finalarraysetup(final_array,event)
        }

        if (event.target.innerText=== "INTERMEDIATE"){
            const final_array = intermediatefilter.concat(projects);
            finalarraysetup(final_array,event)
        }

        if (event.target.innerText=== "ADVANCED"){
            const final_array = advancedfilter.concat(projects);
            finalarraysetup(final_array,event)
        }

    }

    const finalarraysetup=(final_array,event) => {
        console.log(final_array)
        if(final_array.length > 15){
            const final2 = final_array.filter(el =>el.subscription===event.target.name || el.course===event.target.innerText.toLowerCase())
            
            const filteredbyid = [...new Map(final2.map(item => [item.project_id, item])).values()]
            setProjects(filteredbyid)
            console.log(filteredbyid);
            console.log(event);
            
        } 

        else {
            const filteredbyid = [...new Map(final_array.map(item => [item.project_id, item])).values()]
            setProjects(filteredbyid)
            console.log("asd")
            console.log(projects)
        }
  
    }

    return (
        <div className="library">
            <div className="libraryleft">
                
                <h3>SUBSCRIPTION</h3>

                <FormGroup>
                    <FormControlLabel control={<Checkbox checked = {free} onChange = {handleCheckSubscription} name="free" color="primary"/>} label="Free"/>
                    <FormControlLabel control={<Checkbox checked = {premium} onChange = {handleCheckSubscription} name="premium" color="primary"/>}label="Premium"/>
                </FormGroup>
                <br />

                <h3>ACTIVITY TYPE</h3>
                <p>animation</p>
                <p>game</p>
                <p>chatbot</p>
                <p>augmented reality</p>
                <br />

                
                <h3>YEAR LEVEL</h3>
                <p>1-4</p>
                <p>5-6</p>
                <p>7-8</p>
                <p>9-13</p>
                <br />
                <h3>SUBJECT MATTER</h3>
                <p>computer science</p>
                <p>Maths</p>
                <p>Science</p>
                <p>language</p>
                <p>art</p>
                <p>music</p>
                <br />
            </div>

            <div className="libraryright">
            
                <div className="filtersbar">
                    <div className="difficultyfilter">
                        <ButtonGroup>
                            <Button onClick={filterdifficulty}>beginner</Button>
                            <Button onClick={filterdifficulty}>intermediate</Button>
                            <Button onClick={filterdifficulty}>advanced</Button>
                        </ButtonGroup>
                    </div>

                    <div className="numberdisplayfilter">
                        <p>SHOW</p>

                        <ButtonGroup>
                            <Button>5</Button>
                            <Button>10</Button>
                            <Button>15</Button>
                        </ButtonGroup>
                    </div>
                </div>

                <div className="projectsdisplaygrid">
                    {projects.map(project => (
                        <div >
                            <img src={project.image} className="projectimage" alt={`projectimage${project.project_id}`} />
                            <div>
                                <h4 className="project_name">{project.project_name}</h4>
                                <div className="project_description">
                                    <p>{project.activity_type+"    "}</p>
                                    <p>{project.course}</p>
                                    <p>{project.subscription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="buttonatbuttom">
                    <button onClick={topFunction} id="myBtn" title="Go to top">BACK TO TOP</button>
                </div>
            </div>
        </div>
    )
}
