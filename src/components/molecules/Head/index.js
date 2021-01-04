import React from 'react'
import { useHistory } from 'react-router-dom'
import { divLogo } from '../../../assets'
import './style.css'

const Head = () => {
    let history = useHistory();
    return (
        <div className="header">
        <div className="top">
            <img className="logo" src={divLogo} alt = "DIVERGENT" />
            <p className = "logo-tit" onClick={() => history.push('/')}>DIVERGENT.CO</p>
        </div>
        </div>
    )
}

export default Head
