import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section footer-brand-section">
            <div className="footer-brand">
              <img src="/logo.png" alt="ITNEXT Logo" className="footer-logo" />
              <h3>Talent Development Platform</h3>
            </div>
            <p className="footer-description">
              Revolutionary talent development platform transforms IT professionals through AI-powered learning, 
              immersive training, and guaranteed job placement. Your career, powered by intelligence.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">i</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#assessment">AI Skills Assessment</a></li>
              <li><a href="#learning">Personalized Learning</a></li>
              <li><a href="#labs">Virtual Lab Training</a></li>
              <li><a href="#certification">Skill Certification</a></li>
              <li><a href="#placement">Job Placement</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li><a href="#cloud">Cloud Computing</a></li>
              <li><a href="#security">Information Security</a></li>
              <li><a href="#itsm">IT Service Management</a></li>
              <li><a href="#networking">Networking</a></li>
              <li><a href="#devops">DevOps</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Talent Development Platform. All rights reserved. Transforming careers through intelligent technology.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#powered">Powered by Readdy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
