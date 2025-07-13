import React from 'react';
import { FaCertificate } from 'react-icons/fa'; // Verification Icon
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      description: "A foundational program focusing on supervised learning, deep learning, and practical machine learning applications.",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/3RJ7P9KIY9S0" // Replace with your actual certificate URL
    },
    {
      title: "What is Data Science?",
      issuer: "IBM",
      description: "An introductory course exploring the core concepts and career landscape of data science.",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/LTRBKKXVQXBM"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      description: "A primer on networking principles, protocols, and essential tools for communication technologies.",
      verifyLink: "https://www.credly.com/badges/510b444b-61f9-453d-a7aa-0b47d5582c49/linked_in_profile"
    },
    {
      title: "Introduction to Microsoft Excel",
      issuer: "Coursera",
      description: "A practical course on data organization, formulas, and spreadsheet analysis.",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/HZKN5MAPHPZV"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">
          Certifications
          <div className="title-underline"></div>
        </h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <div className="issuer-logo">{cert.issuer.charAt(0)}</div>
                <div className="certification-title-group">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">Issued by {cert.issuer}</p>
                </div>
              </div>
              <p className="certification-description">{cert.description}</p>
              <a href={cert.verifyLink} className="verify-button" target="_blank" rel="noopener noreferrer">
                <FaCertificate /> Verify Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;