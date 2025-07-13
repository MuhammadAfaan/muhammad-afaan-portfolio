import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-socials">
                    <a href="https://github.com/MuhammadAfaan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/muhammad-afaan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/923457259290" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                </div>
                <p className="footer-copyright">
                    © {currentYear} Muhammad Afaan. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;