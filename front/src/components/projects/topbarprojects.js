import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
//impor from '@material-ui/cor';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './topbarprojects.css';

//import logo from './logo.svg';

const styles = makeStyles({
    
    myAvatarStyle: {
        width:"20px",
        height:"20px",
        marginRight:"5px"
    }
}); 

export default function TopbarProjects() {
    const classes=styles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar className="toolbar">

                    <div className="toolbarleft">
                    <Link to="/"><img src="logo.png" alt="logo" id="logo"/></Link>
                    </div>

                    <div className="toolbarmid">               
                        <p><Link to="/">Home </Link>  </p>
                        <p style={{paddingLeft:'55px',paddingRight:'55px'}}>Projects</p>   
                        <p>Teachers</p>    
                    
                    </div>

                    <div className="toolbarright">
                        <div className="toolbarrighttop">
                     {/* variant="h6" style={{padding:"0px 5px 0px 5px"}}> */}
                            LANG
                        

                        <img src="nzFlag.png" alt="nzflag" style={{padding:"0px 5px 0px 5px"}}/>
                        <img src="maoriflag.png" alt="maoriflag" style={{padding:"0px 5px 0px 5px"}} />
                        </div>

                        <div className="toolbarrightbot">
                            <Avatar className={classes.myAvatarStyle} />
                            {/* REGISTER | LOGIN */}
                            <Link to="/projects">REGISTER | LOGIN </Link> 
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}
