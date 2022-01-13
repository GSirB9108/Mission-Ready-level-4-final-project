import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Login from './login';
import { useState } from 'react';

import './topbar.css'



const useStyles = makeStyles({
    paper:{
      flexDirection:"row",
      maxWidth: "800px"
    }
})

function PopUpLogin (props){
const classes = useStyles();

return (
<Dialog open = {props.openDialog} onClose = {props.closeDialog} classes={{paper: classes.paper}}> 
    
    <Login/>
    <p className="loginclose" onClick={props.closeDialog}>X</p>
</Dialog>
)
}


const styles = makeStyles({
    
    myAvatarStyle: {
        width:"20px",
        height:"20px",
        marginRight:"5px",
        marginTop:"15px"
    }
}); 

export default function Topbar() {
    const classes=styles();

    const [dialogOpen, setDialogOpen] = useState(false)
    const handleDialogClose = () => {
         setDialogOpen(false);
    }
    

    return (
        <div>
            <AppBar position="static">
                <Toolbar className="toolbar">

                    <div className="toolbarleft">
                    <img src="logo.png" alt="logo" id="logo"/>
                    </div>

                    <div className="toolbarmid">
                        <p>Home</p>   
                        <p style={{paddingLeft:'55px',paddingRight:'55px'}}>Features</p>  
                        <p>Teachers</p>    
                    
                    </div>

                    <div className="toolbarright">
                        <div className="toolbarrighttop">
                            <p>LANG</p>
                            <img src="nzFlag.png" alt="nzflag" style={{padding:"15px 5px 0px 5px", height:"25px"} }/>
                            <img src="maoriflag.png" alt="maoriflag" style={{padding:"15px 5px 0px 5px", height:"25px"}} />
                        </div>

                        <div className="toolbarrightbot">
                            <Avatar className={classes.myAvatarStyle} />
                            <p onClick={()=>setDialogOpen(true)}>REGISTER | LOGIN </p> 
                        </div>

                        <PopUpLogin  openDialog = {dialogOpen} closeDialog = {handleDialogClose} />
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}
