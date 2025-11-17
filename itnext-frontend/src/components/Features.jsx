import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🔍',
      title: 'LEARN',
      description: 'AI-powered skills assessment identifies your current level and creates personalized learning paths tailored to market demands.'
    },
    {
      icon: '🎓',
      title: 'TRAIN',
      description: 'Immersive virtual labs and hands-on projects in IT Service Management, Cloud, Security, and Networking prepare you for real-world challenges.'
    },
    {
      icon: '⚔️',
      title: 'BUILD',
      description: 'Develop your blockchain-backed skill passport with verifiable credentials and build a professional portfolio that stands out to employers.'
    },
    {
      icon: '💼',
      title: 'RECRUIT',
      description: 'Direct placement with our 800+ partner companies. We don\'t just train you - we connect you with the right opportunities.'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="section-title">Complete Talent Development Ecosystem</h2>
        <p className="section-subtitle">
          From assessment to placement - we handle every step of your IT career transformation journey
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
