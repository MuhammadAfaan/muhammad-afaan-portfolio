import React from 'react';
import './About.css';
// Replace with your own image path
import profileImage from '../assets/profile.jpg';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">
                    About Me
                    <div className="title-underline about-underline"></div>
                </h2>
                <div className="about-content-wrapper">
                    <div className="about-image-container">
                        <img src={profileImage} alt="Muhammad Afaan" className="profile-image" />
                    </div>
                    <div className="about-text-container">
                        <p>
                            I'm Muhammad Afaan, a Data Science student at NUST, Islamabad, passionate about solving real-world problems using machine learning, LLMs, and automation.
                        </p>
                        <p>
                            From building a WhatsApp-based financial assistant (HissabDost) to training YOLO models for medical image segmentation and developing voice-based agents with Vapi, I enjoy creating intelligent systems that drive impact.
                        </p>
                        <p>
                            I’m a quick learner and critical thinker with hands-on experience across the ML pipeline from data prep and modeling to deployment. I bring a practical, problem-solving mindset to every project I take on.
                        </p>
                        <div className="about-signature">
                            Afaan
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;