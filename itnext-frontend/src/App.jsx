import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Journey from './components/Journey';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Journey />
      <Courses />
      {/* <Testimonials /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
