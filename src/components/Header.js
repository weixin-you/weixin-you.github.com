import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import '../styles/Header.css'

function Header() {
  return (
    <div className='navigation'>
        <Link to='/'> <img src={logo} className='logo'/> </Link>
        <nav>
          <ul className='header-nav'>
            <li><Link className='linkhome' to='/'>HOME</Link></li>
            <li>ABOUT US</li>
            <li>PARTNERS</li>
            {/* <li><Link className='linkprojects' to='/projects'>PROJECTS</Link></li> */}
            <li className="dropdown">
              <a href="/projects" className="dropdown-link">
                PROJECTS<span className="dropdown-icon"><RiArrowDropDownLine /></span>
              </a>
              <div className="dropdown-content">
                <a href="/past-projects">Past Projects</a>
                <a href="/ongoing-projects">Ongoing Projects</a>
              </div>
           </li>
          </ul>
        </nav>
        
  
      
        <Link to='/donate' className='donatebtn'>
          <input type='button' value='DONATE NOW' className='linkdonate'/>
        </Link>
       
        <input className='search' placeholder='SEARCH...'/>
    </div>
  )
}

export default Header