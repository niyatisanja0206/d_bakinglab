import React from 'react';
import '../css/home.css'; // Ensure this CSS file is updated
import heroimg from '../assets/Baked-Goods.jpg';
import PropTypes from 'prop-types';
import keyfeat from '../assets/Key feature.jpg';
import service from '../assets/Services.jpg';
import whyus from '../assets/Whyus.jpg';
import customer from '../assets/Customer.jpg';
import cta from '../assets/Cta.jpg'
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';
import team4 from '../assets/team-4.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Header Section */}
      <header className="hero-header">
        <img src={heroimg} alt="Freshly Baked Goods" className="hero-image" />
        <div className="hero-text">
          <h1>Deliciously Fresh Baked Goods</h1>
          <p>Experience the Joy of Every Bite!</p>
          <a href="/menu" className="cta-button">Browse Products</a>
        </div>
      </header>

      <div className='all'>
      <div className='sections'>
        <section className="features">
          <div className="section-card">
            <img src={keyfeat} alt="Features" className="section-image" />
            <div className="text-content">
              <h2>Key Features</h2>
              <ul>
                <li>Scrumptious Baked Goods</li>
                <li>Seamless Online Ordering</li>
                <li>Personalized Customer Experience</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="services">
          <div className="section-card">
            <div className="text-content">
              <h2>Our Services</h2>
              <p>We offer custom orders, delivery options, and catering for events.</p>
            </div>
            <img src={service} alt="Services" className="section-image" />
          </div>
        </section>

        <section className="benefits">
          <div className="section-card">
            <img src={whyus} alt="Benefits" className="section-image" />
            <div className="text-content">
              <h2>Benefits of Choosing Us</h2>
              <ul>
                <li>High-quality ingredients</li>
                <li>Artisanal craftsmanship</li>
                <li>Exceptional customer service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="section-card">
            <div className="text-content">
              <h2>Customer Testimonials</h2>
              <blockquote>
                "The best bakery in town! Highly recommend their pastries!"
              </blockquote>
            </div>
            <img src={customer} alt="Testimonials" className="section-image" />
          </div>
        </section>

        <section className="cta">
          <div className="section-card">
            <img src={cta} alt="CTA" className="section-image" />
            <div className="text-content">
              <h2>Stay Updated!</h2>
              <p>Sign up for our newsletter to receive the latest updates and offers.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={team1} alt="Team Member 1" className="team-image" />
            <div className="card-content">
              <h3>John Doe</h3>
              <p>Baker</p>
            </div>
          </div>
          <div className="team-card">
            <img src={team2} alt="Team Member 2" className="team-image" />
            <div className="card-content">
              <h3>Jane Smith</h3>
              <p>Pastry Chef</p>
            </div>
          </div>
          <div className="team-card">
            <img src={team3} alt="Team Member 3" className="team-image" />
            <div className="card-content">
              <h3>Emily Johnson</h3>
              <p>Customer Service</p>
            </div>
          </div>
          <div className="team-card">
            <img src={team4} alt="Team Member 4" className="team-image" />
            <div className="card-content">
              <h3>Edon D'suza</h3>
              <p>Cake Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
    
export default Home;