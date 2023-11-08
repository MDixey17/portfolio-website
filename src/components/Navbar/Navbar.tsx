import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [aboutActive, setAboutActive] = useState<boolean>(true); // when the page first loads, this is always true
  const [experienceActive, setExperienceActive] = useState<boolean>(false);
  const [projectsActive, setProjectsActive] = useState<boolean>(false);

  useEffect(() => {
    const experienceLine = document.getElementById("experience");
    const projectsLine = document.getElementById("projects");

    const listenScrollEvent = () => {
      if (
        window.scrollY > experienceLine!.offsetTop - 100 &&
        window.scrollY < projectsLine!.offsetTop - 100
      ) {
        setAboutActive(false);
        setExperienceActive(true);
        setProjectsActive(false);
      } else if (window.scrollY >= projectsLine!.offsetTop - 100) {
        setAboutActive(false);
        setExperienceActive(false);
        setProjectsActive(true);
      } else {
        setAboutActive(true);
        setExperienceActive(false);
        setProjectsActive(false);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-container">
        <a
          href="#about"
          className={aboutActive ? "active-navbar" : "not-active-navbar"}
        >
          ABOUT
        </a>
        <a
          href="#experience"
          className={experienceActive ? "active-navbar" : "not-active-navbar"}
        >
          EXPERIENCE
        </a>
        <a
          href="#projects"
          className={projectsActive ? "active-navbar" : "not-active-navbar"}
        >
          PROJECTS
        </a>
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
          <a
            href="https://www.youtube.com/channel/UCglLpH58CRfi660yU4wpe8w"
            className="navbar-social-logo"
          >
            <FontAwesomeIcon icon={faYoutube} color="#b2071d" size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};
