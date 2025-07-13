import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import hissabdost from '../assets/hissabdost.jpg';
import runPredictor from '../assets/runPredictor.png';
import airPollution from '../assets/airPollution.png';
import sudoku from '../assets/sudoku.jpg';
import yolo from '../assets/yolo.png';
import pos from '../assets/pos.png';


// Project data is now cleanly organized in an array for better readability
const projectList = [
  {
    title: "HissabDost - Financial Buddy",
    description: "A personal finance tracker with a chatbot that analyzes spending, generates reports, and provides financial insights.",
    tags: ["React", "JavaScript", "LLM", "Automation", "Chatbot"],
    image: hissabdost,
    repoLink: "https://hissabdost.cloud/"
  },
  {
    title: "T20 Runs Predictor",
    description: "Developed a cricket runs prediction model using XGBoost, including full data cleaning, feature engineering, and EDA.",
    tags: ["Scikit-learn", "XGBoost", "Stream-lit"],
    image: runPredictor,
    repoLink: "https://github.com/MuhammadAfaan/"
  },
  {
    title: "Survival FPS Game",
    description: "A first-person shooter in Unreal Engine 5 with AI enemies, health mechanics, and a C++ inventory system.",
    tags: ["Unreal Engine 5", "C++", "AI", "Game Development"],
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=2940&auto=format&fit=crop",
    repoLink: "https://github.com/MuhammadAfaan/SurvivalFPS"
  },
  {
    title: "Air Pollution Analysis",
    description: "Conducted extensive EDA on WHO air quality datasets to analyze pollutant distributions and city-level patterns.",
    tags: ["Pandas", "Matplotlib", "EDA", "Numpy"],
    image: airPollution,
    repoLink: "https://colab.research.google.com/drive/1OEOl0acCYZl-SP8rkhDd-cIZtATkhxZL?usp=sharing"
  },
  {
    title: "POS & Inventory System",
    description: "A complete point-of-sale system with role-based logins and inventory management, built using Java Swing and SQLite.",
    tags: ["Java", "Swing", "SQLite", "GUI", "Inventory Management", "POS", "OOP"],
    image: pos,
    repoLink: "https://github.com/MuhammadAfaan/Store-Management-System/"
  },
  {
    title: "Sudoku Solver | AI",
    description: "Built a Sudoku solver using forward-checking and backtracking algorithms for efficient constraint satisfaction.",
    tags: ["C++", "Algorithms", "Backtracking", "AI"],
    image: sudoku,
    repoLink: "https://github.com/MuhammadAfaan/SudokuSolver"
  },

  {
    title: "YOLOv8 Image Segmentation",
    description: "Trained a custom YOLOv8 model for high-precision image segmentation to identify and outline specific objects.",
    tags: ["YOLOv8", "PyTorch", "Computer Vision"],
    image: yolo,
    repoLink: "https://github.com/MuhammadAfaan/"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          My Projects
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
                {/* Front face of the card */}
                <div className="card-front">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="front-title">{project.title}</div>
                </div>
                {/* Back face of the card */}
                <div className="card-back">
                  <h3 className="project-title-back">{project.title}</h3>
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