import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">

        {/* Left Section */}
        <div className="home-text-side">
          <h1 className="home-headline">
            Web Design & Development Company
          </h1>

          <p className="home-description">
         We provide top-of-the-range website design and development, graphic designing, digital marketing, SEO services, and Mobile Apps development, among others.</p>
          

          <div className="home-button-group">
            <button className="btn-filled">Get a Free Consultation</button>
            <button className="btn-outline">Our Services</button>
            <button className="btn-outline">Our Products</button>
          </div>

          <div className="home-stats">
            <div className="stat-box">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">50+</span>
              <span className="stat-label">Clients Worldwide</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="home-image-side">
          <div className="image-frame">
            
            <img
              src="https://www.valleypointtechnologies.com/assets/img/prod-eng.png" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;