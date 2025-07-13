import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; // Work Icon
import './Experience.css';

function Experience() {
const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Biomisa Lab, SINES, NUST",
    duration: "Jun 2025 – Present",
    description: [
      "Working on deep learning models (CNNs and Transformers) for medical imaging and diagnosis tasks.",
      "Building AI agents and contributing to automation in the biomedical domain.",
      "Assisting with frontend development for internal tools and ML model interfaces."
    ]
  },
  {
    title: "Freelance Data Scientist & ML Engineer",
    company: "Fiverr & Upwork",
    duration: "2023 – Present",
    description: [
      "Actively offering services in machine learning, data analysis, and AI agent development.",
      "Built demo projects including a WhatsApp financial assistant, cold calling agent, and image segmentation tools.",
      "Currently building portfolio and gaining traction on platforms through proposal submissions and personal branding."
    ]
  }
];


  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">
          My Experience
          <div className="title-underline experience-underline"></div>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="timeline-duration">{exp.duration}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;