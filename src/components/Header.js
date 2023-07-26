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
            <li><Link className='linkabout' to='/about'>ABOUT US</Link></li>
            <li className="dropdown">
              <Link to="/partners" className="dropdown-link">
                PARTNERS<span className="dropdown-icon"><RiArrowDropDownLine /></span>
              </Link>
              <div className="dropdown-content">
                <Link to="/charities-supported">Canadian Charities Supported</Link>
                <Link to="/partners">Approved HSOC Partners Outside Canada</Link>
              </div>
           </li>
            <li className="dropdown">
              <Link to="/ongoing-projects" className="dropdown-link">
                PROJECTS<span className="dropdown-icon"><RiArrowDropDownLine /></span>
              </Link>
              <div className="dropdown-content">
                <Link to="/past-projects">Past Projects</Link>
                <Link to="/ongoing-projects">Ongoing Projects</Link>
              </div>
           </li>
          </ul>
        </nav>
        
  
        
        {/* <Link to='/donate' className='donatebtn'>
          <input type='button' value='DONATE NOW' className='linkdonate'/>
        </Link> */}
        <div className='donate-btn-container'>
          <Link to='/donate'>
            <input type='button' value='DONATE NOW' className='linkdonate'/>
          </Link>
        </div>
       
        <input className='search' placeholder='SEARCH...'/>
    </div>
  )
}

export default Header