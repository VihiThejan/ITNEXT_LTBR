import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="/logo.png" alt="ITNEXT Logo" className="navbar-logo" />
          <span className="navbar-title">Talent Development Cloud</span>
        </div>
        <div className="navbar-menu">
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#success" className="nav-link">Success Stories</a>
        </div>
        <div className="navbar-actions">
          <button className="btn-primary">Start Assessment</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
