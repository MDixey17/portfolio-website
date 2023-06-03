import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-container">
        <p>HEADSHOT</p>
      </div>
      <div className="navbar-center-container" />
      <div className="navbar-right-container">
        <a href="#">ABOUT</a>
        <a href="#">EXPERIENCE</a>
        <a href="#">PROJECTS</a>
        <a href="https://github.com/MDixey17">
          <FontAwesomeIcon icon={faGithub} color="#FFFFFF" size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/matt-dixey/">
          <FontAwesomeIcon icon={faLinkedin} color="#49a1eb" size="2x" />
        </a>
      </div>
    </div>
  );
};
