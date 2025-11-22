import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <>
      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
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
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter">
        <div className="newsletter-container">
          <h2>Stay Updated with Latest Courses</h2>
          <p className="newsletter-description">
            Get notified about new courses, special offers, and learning tips delivered straight to your inbox.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
          <p className="newsletter-privacy">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-container">
          <h2 className="cta-title">Ready to Launch Your IT Career?</h2>
          <p className="cta-description">
            Join over 15,000 professionals who transformed their careers through our complete talent development cloud. 
            We don't just teach - we Learn, Train, Build, and Recruit until you're successfully placed in your dream IT role.
          </p>
          <div className="cta-actions">
            <button className="btn-primary large">Start Your Journey Today</button>
            <button className="btn-secondary large">Talk to Career Advisor</button>
          </div>
          <div className="cta-features">
            <span>98% job placement guarantee</span>
            <span>Blockchain-verified credentials</span>
            <span>800+ hiring partner network</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
