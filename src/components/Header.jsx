import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="header-logo">Muhammad Afaan</a>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-right">
          <a
            href="/Affan_Resume.pdf" // This path works when the PDF is in the /public folder
            className="btn btn-dark-outline" // Using a new button style
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;