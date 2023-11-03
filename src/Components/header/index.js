import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './style.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='header-main'>
      <div className='container'>
        <div className='header-inner'>
          <div className="logo">
            <NavLink exact to="/">
              <img src={logo} alt="img" />
            </NavLink>
          </div>
          <nav className="menu">
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/abouts">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

          </nav>
          {/* <div className="login-button">
            <button>
              <NavLink to="/login">Login</NavLink>
            </button>
          </div> */}

        </div>


      </div>
    </div>
  )
}

export default Header