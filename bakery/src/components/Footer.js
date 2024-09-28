// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../css/footer.css'; // Importing custom styling for footer

const Footer = () => (
  <footer className="footer">
    <div className="container text-center">
      <p>Follow us on social media</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p>Our Locations:</p>
      <ul className="footer-locations">
        <li>Main Bakery: 123 Sweet St, Baked Town, BT 12345</li>
        <li>Downtown Outlet: 456 Sugar Ave, Sugar City, SC 67890</li>
        <li>Uptown Cafe: 789 Cake Blvd, Dessert City, DC 11223</li>
      </ul>
      <p>© 2024 Bakery Delights. All Rights Reserved.</p>
      <p><a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a></p>
    </div>
  </footer>
);

export default Footer;
