import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const NavbarAdmin = () => {
    let history = useHistory();

    const logout = () => {
        if (window.confirm('Yakin ingin logout?')) {
            Axios.get("http://localhost:3001/auth/logout").then(() => {
                history.push("/admin/login");
                window.location.reload(false)
            })
        }
    }

    const [login, setLogin] = useState(true);
    useEffect(() => {
        Axios.get("http://localhost:3001/auth/login").then((response) => {
          if (response.data.loggedIn === true) {
            setLogin(true)
          } else {
            setLogin(false)
          }
        })
      }, [])
    return (
        <nav className="navbar">
            {login ? (
                <>
            <NavLink 
            exact to="/admin/" 
            activeClassName="nav-item--active" 
            className="nav-item">
                POST
            </NavLink>
            <NavLink 
            to="/admin/" 
            // activeClassName="nav-item--active"
            className="nav-item"
            onClick={logout} >
                Log Out
            </NavLink>
                </>
            ):(
                <>
                Selamat Datang, silahkan login untuk melanjutkan
                </>
            )}
        </nav>
    )
}

export default NavbarAdmin
