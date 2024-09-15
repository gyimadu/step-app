import React from 'react';
// import './App.css';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className='options'>
            <div className="logo">step</div>
            <div className="nav-links">
            <a href="#degree-planner">Degree Planner</a>
            <a href="#simulator">Simulator</a>
            <a href="#profile">Profile</a>
            </div>
        </div>
        <button className="login-button">Sign In</button>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Effortless degree planning at your fingertips</h1>
          <p>Plan, track, and optimize your academic path with confidence.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          {/* Include image via img tag or background image */}
          <img src="hero-image.png" alt="Planning illustration" />
        </div>
      </div>

      {/* Feature Sections */}
      <div className="feature-section first-feature">
        <div className="feature-text">
          <h2>Visualize your entire degree path with ease</h2>
          <p>Our Degree Planner helps you map out your semesters, track your progress, and ensure you’re on track to graduate.</p>
          <button className="feature-button">Start Planning</button>
        </div>
        <div className="feature-image">
          <img src="feature1-image.png" alt="Degree planning illustration" />
        </div>
      </div>

      <div className="feature-section second-feature">
        <div className="feature-text">
          <h2>Curious about adding a major or a minor?</h2>
          <p>Our Simulator lets you explore how different choices impact your degree plan and make informed decisions about your academic future.</p>
          <button className="feature-button">Start Simulation</button>
        </div>
        <div className="feature-image">
          <img src="feature2-image.png" alt="Simulator illustration" />
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="ready-section">
        <h2>Ready to get started?</h2>
        <p>Take control of your academic journey today! Sign up now to begin planning your degree and exploring all the features we offer.</p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>step</h4>
            <p>Address: 123 Main St, Springfield, XY 12345</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#degree-planner">Degree Planner</a></li>
              <li><a href="#simulator">Simulator</a></li>
              <li><a href="#profile">Profile</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: info@stepapp.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <p className="copyright">© 2024 Step App, All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
