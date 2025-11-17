import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Cloud Solutions Architect at Microsoft',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20in%20business%20attire%20smiling%20confidently%20in%20a%20modern%20office%20environment%20with%20cloud%20computing%20infrastructure%20visible%20in%20the%20background%2C%20clean%20corporate%20setting&width=150&height=150&seq=testimonial-1&orientation=squarish',
      quote: 'The AI-powered assessment identified gaps in my Azure knowledge I didn\'t even know existed. The personalized learning path helped me transition from a network admin to a cloud architect in just 8 months. The blockchain credentials were a game-changer during interviews.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Security Analyst at CyberDefense Corp',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20man%20in%20business%20casual%20attire%20with%20a%20confident%20smile%20in%20a%20cybersecurity%20operations%20center%20with%20multiple%20monitors%20showing%20security%20dashboards%20in%20the%20background&width=150&height=150&seq=testimonial-2&orientation=squarish',
      quote: 'The virtual lab environment is incredible - I practiced real penetration testing scenarios that directly applied to my current role. The AI interview prep helped me land a 40% salary increase. This platform is revolutionary for cybersecurity professionals.'
    },
    {
      name: 'Emily Thompson',
      role: 'IT Service Manager at TechGlobal Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20woman%20with%20blonde%20hair%20in%20business%20attire%20smiling%20warmly%20in%20a%20modern%20IT%20office%20environment%20with%20service%20management%20dashboards%20and%20ITIL%20framework%20charts%20visible&width=150&height=150&seq=testimonial-3&orientation=squarish',
      quote: 'The ITIL training combined with AI-driven insights transformed how I approach service management. The skill passport feature made it easy to showcase my verified competencies to stakeholders. Highly recommend for any IT professional looking to advance.'
    },
    {
      name: 'David Park',
      role: 'Network Engineer at Enterprise Networks Inc',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20man%20in%20business%20attire%20with%20glasses%20smiling%20confidently%20in%20a%20network%20operations%20center%20with%20router%20configurations%20and%20network%20topology%20diagrams%20visible%20on%20screens&width=150&height=150&seq=testimonial-4&orientation=squarish',
      quote: 'From basic networking to SD-WAN expertise in 6 months! The adaptive learning path adjusted to my pace perfectly. The hands-on virtual labs with real Cisco and Juniper equipment simulations were exactly what I needed to level up my career.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Success Stories from IT Professionals</h2>
        <p className="section-subtitle">
          Discover how our AI-powered platform has transformed careers and accelerated 
          professional growth for thousands of IT professionals across various specializations.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-stats">
          <div className="stat-box">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-box">
            <h3>10,000+</h3>
            <p>Success Stories</p>
          </div>
          <div className="stat-box">
            <h3>95%</h3>
            <p>Career Advancement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
