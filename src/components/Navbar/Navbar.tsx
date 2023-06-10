import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-container">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
      </div>
      <div className="navbar-center-container" />
      <div className="navbar-right-container">
        <div className="navbar-social-container">
          <a href="https://github.com/MDixey17" className="navbar-social-logo">
            <FontAwesomeIcon icon={faGithub} color="#FFFFFF" size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-dixey/"
            className="navbar-social-logo"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#49a1eb" size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};
