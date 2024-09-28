import React, { useState, useEffect } from 'react';
import '../css/navbar.css'; // Ensure your CSS is imported

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Change the number based on when you want to trigger the change
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <h1><b>Sweet Home Bakery</b></h1>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/review">Review</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
