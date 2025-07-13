import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

// Project data is now cleanly organized in an array
const projectList = [
  {
    title: "HissabDost - Financial Buddy",
    description: "A personal finance tracker with a chatbot that analyzes spending, generates reports, and provides financial insights.",
    tags: ["React", "Chart.js", "LLM"],
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2940&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "AI-Powered Calling Agent",
    description: "A custom-built, intelligent calling agent using the Vapi platform, capable of handling natural conversations.",
    tags: ["Vapi", "Python", "AI Agents"],
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2832&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "YOLOv8 Image Segmentation",
    description: "Trained a custom YOLOv8 model for high-precision image segmentation to identify and outline specific objects.",
    tags: ["YOLOv8", "PyTorch", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1579532582937-16c1179a5592?q=80&w=2874&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "T20 Runs Predictor",
    description: "Developed a cricket runs prediction model using XGBoost, including full data cleaning, feature engineering, and EDA.",
    tags: ["Scikit-learn", "XGBoost"],
    image: "https://images.unsplash.com/photo-1599586120158-b60587785390?q=80&w=2940&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "Survival FPS Game",
    description: "A first-person shooter in Unreal Engine 5 with AI enemies, health mechanics, and a C++ inventory system.",
    tags: ["Unreal Engine 5", "C++"],
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2940&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "Air Pollution Analysis",
    description: "Conducted extensive EDA on WHO air quality datasets to analyze pollutant distributions and city-level patterns.",
    tags: ["Pandas", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1611273656209-5a409b328323?q=80&w=2940&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "POS & Inventory System",
    description: "A complete point-of-sale system with role-based logins and inventory management, built using Java Swing and SQLite.",
    tags: ["Java", "Swing", "SQLite"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "Maze Game | C++",
    description: "A dynamic maze game in C++ featuring randomized maze generation and interactive console-based controls.",
    tags: ["C++", "Data Structures"],
    image: "https://images.unsplash.com/photo-1592189370242-a920b2194519?q=80&w=2940&auto=format&fit=crop",
    repoLink: "#"
  },
  {
    title: "Real-Time Sentiment Analyzer",
    description: "An application that analyzes real-time tweet sentiment on a given topic using NLP models from Hugging Face.",
    tags: ["Python", "Hugging Face", "NLP"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
    repoLink: "#"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects
            <div className="title-underline"></div>
        </h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div 
              className="project-card-container" 
              key={index} 
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="project-card">
                <div className="card-front">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="front-title">{project.title}</div>
                </div>
                <div className="card-back">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.repoLink} className="repo-button" target="_blank" rel="noopener noreferrer">
                      View Repo <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;