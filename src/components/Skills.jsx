import React from 'react';
import { FaCode, FaCogs, FaTools } from 'react-icons/fa'; // Importing icons
import './Skills.css';

function Skills() {
  // A comprehensive list of your skills organized into new categories
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="skill-icon languages" />,
      skills: ["Python", "C++", "Java", "JavaScript", "HTML/CSS","React", "SQL"],
      theme: "languages"
    },
    {
      title: "Technical Skills",
      icon: <FaCogs className="skill-icon technical" />,
      skills: ["AI Agents & Automation", "Machine Learning", "Computer Vision", "NLP", "Data Structures", "Algorithms", "Object Detection", "NumPy", "Pandas", "TensorFlow","PyTorch", "Scikit-Learn"],
      theme: "technical"
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="skill-icon tools" />,
      skills: ["LangChain", "Vapi", "n8n", "Zapier", "Power BI", "Tableau", "Linux", "Git & GitHub"],
      theme: "tools"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">
          Skills
          <div className="title-underline"></div>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-card-header">
                {category.icon}
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className={`skill-item ${category.theme}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;