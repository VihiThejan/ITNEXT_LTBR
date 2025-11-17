import React from 'react';
import './Journey.css';

const Journey = () => {
  const steps = [
    {
      number: '1',
      title: 'AI Skills Assessment',
      description: 'Deep analysis of your current skills, experience, and career goals using our proprietary DS-TKG (Dynamic Skills-Technology Knowledge Graph) system.',
      image: '/images/journey-1.jpg'
    },
    {
      number: '2',
      title: 'Personalized Training',
      description: 'Dynamic learning paths adapted to your pace and style. Virtual labs provide hands-on experience in IT Service Management, Cloud, Security, and Networking.',
      image: '/images/journey-2.jpg'
    },
    {
      number: '3',
      title: 'Skill Passport Creation',
      description: 'Build your blockchain-backed credential portfolio with verifiable achievements. Create a professional profile that showcases your verified skills to employers.',
      image: '/images/journey-3.jpg'
    },
    {
      number: '4',
      title: 'Career Placement',
      description: 'Direct connection to our network of 800+ partner companies. AI-powered interview preparation and personalized job matching ensure successful placement.',
      image: '/images/journey-4.jpg'
    }
  ];

  return (
    <section className="journey">
      <div className="journey-container">
        <h2 className="section-title">Your Journey to IT Career Success</h2>
        <p className="section-subtitle">
          Our proven 4-step process transforms IT beginners into job-ready professionals
        </p>
        <div className="journey-steps">
          {steps.map((step, index) => (
            <div key={index} className="journey-step">
              <div className="step-content-wrapper">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              <div className="step-image">
                <img src={step.image} alt={step.title} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
