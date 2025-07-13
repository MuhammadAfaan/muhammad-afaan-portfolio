import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Contact
          <div className="title-underline"></div>
        </h2>
        <div className="contact-content-wrapper">
          {/* Left Side: Get in Touch Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out.
            </p>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>affansheikh500@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span>+92 345 7259290</span>
            </div>
            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/muhammad-afaan/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/MuhammadAfaan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://wa.me/923457259290" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-container">
            {/* The form now points to your specific Formspree endpoint */}
            <form 
              action="https://formspree.io/f/xqalzbzj" 
              method="POST" 
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;