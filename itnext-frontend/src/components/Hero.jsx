import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <h1 className="hero-title">Your Career, Powered by Intelligence</h1>
        <p className="hero-subtitle">
          Learn • Train • Build • Recruit
        </p>
        <p className="hero-description">
          Revolutionary talent development platform transforms IT professionals through AI-powered assessment, personalized learning paths, immersive virtual labs, and guaranteed job placement.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            Start AI Assessment
          </button>
          <button className="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Explore Virtual Labs
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>15K+</h3>
            <p>Candidates Placed</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Job Placement Success</p>
          </div>
          <div className="stat-item">
            <h3>800+</h3>
            <p>Partner Employers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
