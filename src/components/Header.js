import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import '../styles/Header.css'
function Header() {
  return (
    <div className='navigation'>
        <Link to='/'> <img src={logo} className='logo'/> </Link>
        <nav>
          <ul className='header-nav'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>PARTNERS</li>
            <li>PROJECTS</li>
          </ul>
        </nav>
        
        <input className="donatebtn" type='button' value={"DONATE NOW"}></input>
        <input className='search' placeholder='SEARCH...'></input>
    </div>
  )
}

export default Header