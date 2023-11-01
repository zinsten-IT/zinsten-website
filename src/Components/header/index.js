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
    <div>
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
      <img src={logo} alt="img" />
      </div>
      <nav className="menu">
      <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>



    </div>
  )
}

export default Header