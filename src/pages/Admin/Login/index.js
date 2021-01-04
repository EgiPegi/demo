import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './style.css'
import { useHistory } from 'react-router-dom';

const Login = () => {
    //state login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [status, setStatus] = useState('');

    Axios.defaults.withCredentials = true;
    let history = useHistory();


    const login = () => {
        Axios.post("http://localhost:3001/auth/login", {
          username: username,
          password: password,
        }).then((response => {
          if (response.data.message) {
            setStatus(response.data.message);
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
            setStatus(response.data[0].username)
            console.log(response)
            history.push("/admin/");
            window.location.reload(false);
          }
          // console.log(response);
        }))
      }

      useEffect(() => {
        Axios.get("http://localhost:3001/auth/login").then((response) => {
          if (response.data.loggedIn === true) {
            history.push("/admin/");
          }
        })
      }, [])
  
    return (
        <div className="login">
            <div className="log-wrap">
                <p style={{textAlign:'center', fontWeight:'bold'}}>LOGIN</p>
            <label>Username</label>
            <input type="text" className="inp-lgn"
            onChange = {(e) => {
                setUsername(e.target.value);
            }} />
            <label>Password</label>
            <input type="password" className="inp-lgn"
            onChange = {(e) => {
                setPassword(e.target.value);
            }} />
            <button className="btn-lgn" onClick={login}>Login</button>
            <h4>{status}</h4>
            </div>
        </div>
    )
}

export default Login
