// src/components/Loader.js
import React from 'react';
import '../css/loader.css'; // Keep the loading bar styling
import loader from '../assets/Loader.gif';
const Loader = () => {
  return (
    <div className="loader-container">
      {/* Displaying the local GIF */}
      <img src={loader} alt="Loading..." className="loader-gif" />

      {/* Loading bar */}
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
};

export default Loader;
