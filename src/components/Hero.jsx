import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div> {/* Animated background element */}
      <div className="hero-content">
        <div className="hero-logo">
          <div className="logo-square"></div>
          <div className="logo-circle"></div>
          <div className="logo-triangle"></div>
        </div>

        <h1 className="hero-title">
          <TypeAnimation
            sequence={[
              'Building Intelligent Systems.', // New, powerful headline
              2000,
              'Machine Learning | Automation | Data Science', // Supporting tagline
              2000,
            ]}
            wrapper="span"
            speed={40} // Slightly faster typing speed
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-dark">Contact Me</a>
          <a
            href="/Affan_Resume.pdf" // This path works when the PDF is in the /public folder
            className="btn btn-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;