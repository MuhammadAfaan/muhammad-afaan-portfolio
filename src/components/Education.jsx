import React from 'react';
import { FaUniversity, FaBook } from 'react-icons/fa'; // Icons for the section
import './Education.css';

function Education() {
  const relevantCourses = [
    "Data Structures & Algorithms", "Object Oriented Programming",
    "Database Systems", "Artificial Intelligence", "Computer Networks",
    "Statistics", "Machine Learning", "Intro to Data Science",
    "Assembly Language", "Advanced Statistics"
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">
          Education
          <div className="title-underline education-underline"></div>
        </h2>
        <div className="education-card">
          <div className="education-card-header">
            <div className="education-icon-wrapper">
              <FaUniversity />
            </div>
            <div className="education-title-group">
              <h3 className="education-degree">Bachelor of Science, Data Science</h3>
              <p className="education-university">National University of Science and Technology (NUST), Islamabad</p>
            </div>
            <p className="education-duration">2023 – 2027</p>
          </div>
          <div className="education-card-body">
            <h4 className="coursework-title">
              <FaBook />
              Relevant Coursework
            </h4>
            <div className="coursework-list">
              {relevantCourses.map((course, index) => (
                <span key={index} className="course-item">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;