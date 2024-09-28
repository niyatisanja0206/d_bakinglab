import React, { useState, useEffect } from 'react';
import '../css/navbar.css'; // Ensure your CSS is imported

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false); // State for mobile menu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} shadow-sm`}>
      <div className="navbar-logo">
        <h1><b>Sweet Home Bakery</b></h1>
      </div>
      <button className="mobile-menu-icon" onClick={toggleNav}>
        <span>&#9776;</span> {/* Hamburger icon */}
      </button>
      <div className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/">Home</a></li>
          <li className="list-inline-item"><a href="/menu">Menu</a></li>
          <li className="list-inline-item"><a href="/service">Services</a></li>
          <li className="list-inline-item"><a href="/review">Review</a></li>
          <li className="list-inline-item"><a href="/about">About</a></li>
          <li className="list-inline-item"><a href="/contact">Contact</a></li>         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
