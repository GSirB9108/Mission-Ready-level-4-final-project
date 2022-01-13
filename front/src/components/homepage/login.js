import React from 'react'
import './login.css';
import { useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

const styles = makeStyles({
    
    inputbar: {
        paddingBottom:"25px"
         
    },

    button: {
        display:"block",
        justifyContent:"centre"
    },     
    
}); 

export default function Login() {
    const classes=styles();
    

    const [emailstudent, setEmailstudent] = useState('');
    const [namestudent, setNamestudent] = useState('');
    const [passwordstudent, setPasswordstudent] = useState('');

    const [emailteacher, setEmailteacher] = useState('');
    const [nameteacher, setNameteacher] = useState('');
    const [passwordteacher, setPasswordteacher] = useState('');
    
    const [logorsign, setlogorsign]=useState('LOG IN')

    const handlelogorsign=(e)=>{
        setlogorsign(e.target.innerText)
    }

    const handleLoginstudent = () => {
        axios.post('http://localhost:4000/signin', {
          email: emailstudent,
          password: passwordstudent
        })
        .then(response => {
          if (response.status === 200) {
            
            setEmailstudent('');
            setPasswordstudent('');
            console.log("hi");
            window.location.href="http://localhost:3000/projects"
          }
        })
        .catch(() => {
            
            setEmailstudent('');
            setPasswordstudent('');
        })
      }
    
    const handleSignupstudent = () => {
    axios.post('http://localhost:4000/signup', {
        email: emailstudent,
        name: namestudent,
        password: passwordstudent,
        role:"student"
    })
    .then(response => {
        
        setEmailstudent('');
        setPasswordstudent('');
        setNamestudent('');
        
    })
    .catch(() => {
        
        setEmailstudent('');
        setPasswordstudent('');
        setNamestudent('');
    })
    }

    const handleLoginteacher = () => {
        axios.post('http://localhost:4000/signin', {
          email: emailteacher,
          password: passwordteacher
        })
        .then(response => {
          if (response.status === 200) {
            
            setEmailteacher('');
            setPasswordteacher('');
            console.log("hi");
            window.location.href="http://localhost:3000/projects"
          }
        })
        .catch(() => {
            
            setEmailteacher('');
            setPasswordteacher('');
        })
    }
    
    const handleSignupteacher = () => {
    axios.post('http://localhost:4000/signup', {
        email: emailteacher,
        name: nameteacher,
        password: passwordteacher,
        role:"teacher"
    })
    .then(response => {
        
        setEmailteacher('');
        setPasswordteacher('');
        setNameteacher('');
        
    })
    .catch(() => {
        
        setEmailteacher('');
        setPasswordteacher('');
        setNameteacher('');
    })
    }

   

    let emailinputloginstudent;
    let pwinputloginstudent;

    let loginbuttonstudent;

    let nameinputsignupstudent;
    let emailinputsignupstudent;
    let pwinputsignupstudent;
    let pwconfirminputsignupstudent;

    let signupbuttonstudent;


    let emailinputloginteacher;
    let pwinputloginteacher;

    let loginbuttonteacher;

    let nameinputsignupteacher;
    let emailinputsignupteacher;
    let pwinputsignupteacher;
    let pwconfirminputsignupteacher;

    let signupbuttonteacher;

    let choose_login;
    let choose_signup;

    if (logorsign ==="LOG IN"){
        emailinputloginstudent = <TextField variant="outlined" className={classes.inputbar} size="small" type="email" placeholder="email" value={emailstudent} onChange={(e) => setEmailstudent(e.target.value)} />
        pwinputloginstudent = <TextField variant="outlined" className={classes.inputbar} size="small" type="password" placeholder="password" value={passwordstudent} onChange={(e) => setPasswordstudent(e.target.value)} />
        loginbuttonstudent = <Button onClick={handleLoginstudent}>LOG IN</Button>

        emailinputloginteacher = <TextField variant="outlined" className={classes.inputbar} size="small" type="email" placeholder="email" value={emailteacher} onChange={(e) => setEmailteacher(e.target.value)} />
        pwinputloginteacher = <TextField variant="outlined" className={classes.inputbar} size="small" type="password" placeholder="password" value={passwordteacher} onChange={(e) => setPasswordteacher(e.target.value)} />
        loginbuttonteacher = <Button onClick={handleLoginteacher}>LOG IN</Button>

        choose_login = <p onClick={handlelogorsign} className="chooselogin">LOG IN</p>
        choose_signup = <p onClick={handlelogorsign} >SIGN UP</p>

    } else if (logorsign ==="SIGN UP"){
        nameinputsignupstudent= <TextField variant="outlined" className={classes.inputbar} size="small" type="email" placeholder="full name" value={namestudent} onChange={(e) => setNamestudent(e.target.value)} />
        pwconfirminputsignupstudent= <TextField variant="outlined" className={classes.inputbar} size="small" type="password" placeholder=" confirm password"  />
        emailinputsignupstudent = <TextField variant="outlined" className={classes.inputbar} size="small" type="email" placeholder="email" value={emailstudent} onChange={(e) => setEmailstudent(e.target.value)} />
        pwinputsignupstudent = <TextField variant="outlined" className={classes.inputbar} size="small" type="password" placeholder="password" value={passwordstudent} onChange={(e) => setPasswordstudent(e.target.value)} />
        signupbuttonstudent = <Button onClick={handleSignupstudent}>SIGN UP</Button>

        nameinputsignupteacher= <TextField variant="outlined" className={classes.inputbar} size="small" type="email" placeholder="full name" value={nameteacher} onChange={(e) => setNameteacher(e.target.value)} />
        pwconfirminputsignupteacher= <TextField variant="outlined" className={classes.inputbar} size="small" type="password" placeholder=" confirm password"  />
        emailinputsignupteacher = <TextField variant="outlined" className={classes.inputbar} size="small" type="email" placeholder="email" value={emailteacher} onChange={(e) => setEmailteacher(e.target.value)} />
        pwinputsignupteacher = <TextField variant="outlined" className={classes.inputbar} size="small" type="password" placeholder="password" value={passwordteacher} onChange={(e) => setPasswordteacher(e.target.value)} />
        signupbuttonteacher = <Button onClick={handleSignupteacher}>SIGN UP</Button>

        choose_login = <p onClick={handlelogorsign}>LOG IN</p>
        choose_signup = <p onClick={handlelogorsign} className="choosesignup"> SIGN UP</p>
    }
    return (
        <div className="loginall">
            <div className="loginleft">
                <img src="login/studentpic.png" alt="studentimage" style={{height:"250px",padding:"25px"} }/>
                <h1 className="students">Students</h1>

                <div className="logandsign">
                    
                    {choose_login}
                    {choose_signup}
                </div>

                <div className="loginoption">
                    {emailinputloginstudent} <br />
                    {pwinputloginstudent} <br />
                    {loginbuttonstudent}
                
                    {nameinputsignupstudent} <br />
                    {emailinputsignupstudent} <br />
                    {pwinputsignupstudent} <br />
                    {pwconfirminputsignupstudent} <br />
                    {signupbuttonstudent}
                </div>

            </div>

            <div className="loginright">
                <img src="login/teacherpic.png" alt="teacherimage" style={{height:"250px",padding:"25px"} } />
                <h1 className="teachers">Teachers</h1>

                <div className="logandsign">
                    {choose_login}
                    {choose_signup}
                </div>

                <div className="loginoption">
                    {emailinputloginteacher} <br />
                    {pwinputloginteacher} <br />
                    {loginbuttonteacher}

                    {nameinputsignupteacher} <br />
                    {emailinputsignupteacher} <br />
                    {pwinputsignupteacher} <br />
                    {pwconfirminputsignupteacher} <br />
                    {signupbuttonteacher}
                </div>

            </div>
        </div>
    )
}
