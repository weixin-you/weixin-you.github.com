import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../images/logo.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import '../styles/Header.css'

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (enterValue) => {
    // Check if the searchQuery matches any webpage here.
    // You can implement the search logic based on your data or API calls.
    // For demonstration, let's assume you have a list of webpages as an array.
    const webpages = [
      { path: '/', title: 'HOME' },
      { path: '/about', title: 'ABOUT US' },
      { path: '/partners', title: 'PARTNERS' },
      { path: '/ongoing-projects', title: 'PROJECTS' },
      // Add other webpages as needed...
    ];

    const foundPage = webpages.find((page) => page.title.toLowerCase() === enterValue.toLowerCase());

    if (foundPage) {
      // If a match is found, navigate to the corresponding webpage.
      navigate(foundPage.path);
    } else {
      // If no match is found, do nothing or show an error message.
      console.log('Webpage not found');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Fire the search event when the Enter key is pressed.
      handleSearch();
    }
  };
  return (
    <div className='navigation'>
        <div className='image-and-name'>
          <Link to='/'> <img src={logo} className='logo'/> </Link>
          <span className='img-name'>HSOC</span>
        </div>
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
       
        <input className='search' onKeyDown={(e) => handleSearch(e.target.value)} placeholder='SEARCH...'/>
    </div>
  )
}

export default Header