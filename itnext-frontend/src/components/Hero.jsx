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
          <button className="btn-primary">🤖 Start AI Assessment</button>
          <button className="btn-secondary">🎯 Explore Virtual Labs</button>
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
