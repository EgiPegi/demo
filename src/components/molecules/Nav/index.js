import { NavLink } from 'react-router-dom'
import React from 'react'
import './style.css'

const Nav = () => {
    return (
        <div className="nav">
            <nav className="navbar">
            <NavLink 
            to="/kategori" 
            activeClassName="nav-item--active" 
            className="nav-item">
                <i className="fas fa-tags nav-fa"> </i> <span className="nav-name">Kategori</span>
            </NavLink>
            <NavLink 
            exact to="/" 
            activeClassName="nav-item--active" 
            className="nav-item">
                <i className="fas fa-store-alt nav-fa"> </i> <span className="nav-name">Home</span>
            </NavLink>
            <NavLink 
            to="/about" 
            activeClassName="nav-item--active"
            className="nav-item" >
                <i className="fas fa-user-tie nav-fa"> </i> <span className="nav-name">About</span>
            </NavLink>
        </nav>
        </div>
    )
}

export default Nav
