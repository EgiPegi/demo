import React, { useState } from 'react'
import Axios from 'axios'

const Register = () => {
    //state register
    const [user, setUser] = useState('');
    const [pswd, setPswd] = useState('');


    Axios.defaults.withCredentials = true;

    const reg = () => {
        Axios.post("http://localhost:3001/auth/register", {
          username: user,
          password: pswd,
        }).then((response => {
          console.log(response);
        }))
        // console.log({username: user, password: pswd})
      }
    return (
        <div>
            <div className="login">
            <div className="log-wrap">
                <p style={{textAlign:'center', fontWeight:'bold'}}>REGISTER</p>
            <label>Username</label>
            <input type="text" className="inp-lgn"
            onChange = {(e) => {
                setUser(e.target.value);
            }} />
            <label>Password</label>
            <input type="password" className="inp-lgn"
            onChange = {(e) => {
                setPswd(e.target.value);
            }} />
            <button className="btn-lgn" 
            onClick={reg} >Register</button>
            </div>
        </div>
        </div>
    )
}

export default Register
