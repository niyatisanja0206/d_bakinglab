// src/pages/About.js
import React from 'react';
import '../css/about.css';

const About = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>Delightful Bakes</strong>, where every bite is a piece of heaven! 
                Founded in the heart of the community, our bakery is dedicated to bringing joy and sweetness 
                to your everyday life. We believe that baking is an art, and each creation is crafted with 
                love and passion.
            </p>
            <h2>Our Mission</h2>
            <p>
                At Delightful Bakes, our mission is to provide high-quality baked goods made from 
                the finest ingredients. We strive to create an inviting atmosphere where families and 
                friends can gather, share stories, and enjoy delicious treats. 
            </p>
            <h2>What Makes Us Unique</h2>
            <p>
                Our bakery offers a wide variety of freshly baked goods, including:
            </p>
            <ul>
                <li>Artisan breads made daily</li>
                <li>Decadent cakes for every occasion</li>
                <li>Custom-designed pastries that tell your story</li>
                <li>Gluten-free and vegan options available</li>
            </ul>
            <p>
                We take pride in our commitment to sustainability and community support. We source our 
                ingredients locally whenever possible and participate in community events to give back 
                to those around us. 
            </p>
            <h2>Join Us on Our Journey</h2>
            <p>
                We invite you to explore our menu and discover the delightful treats we have to offer. 
                Follow us on social media for the latest updates, baking tips, and special promotions. 
                Thank you for being a part of our sweet journey!
            </p>
        </div>
    );
};

export default About;

