import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/HealingFeatures';
import Footer from './Footer';
import '../styles/Homepage.css';
// import img1 from '../images/mental finess.webp';
import homeimg from '../images/medical image.jpeg';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
        <img src={homeimg} alt="Healthcare Illustration" className="home-image" />
          <h1 className="home-heading">Revolutionize Your Health Journey</h1>
          <p className="home-subheading">
            Discover innovative healthcare solutions that cater to your well-being, powered by data and AI.
          </p>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
