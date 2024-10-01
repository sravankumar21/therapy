// src/pages/HomePage.js

import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/HealingFeatures';
import Footer from './Footer';
import '../styles/Homepage.css';
import img1 from '../images/mental finess.webp';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
        <img src={img1} alt="Therapy Illustration" className="home-image" />
          <h1 className="home-heading">Nurture Your Mind, Elevate Your Life</h1>
          <p className="home-subheading">
            Empower your mental health with tools designed for emotional well-being and resilience.
          </p>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
