import React from "react";
import "./Experience.css";
import { experienceList } from "./ExperienceList";

export const Experience = () => {
  // TODO: add the Material UI chip component, have it include the avatar, avatar for each techstack is the logo >:)

  return (
    <div className="experience-container">
      <h3>EXPERIENCE</h3>
      <br />
      <div className="experience-content">
        {experienceList.map((experience) => (
          <>
            <div className="experience-info">
              <div className="experience-left">
                <h4>{experience.title}</h4>
                <h5>{experience.employer}</h5>
                <p>{experience.location}</p>
                <p>{experience.timespan}</p>
              </div>
              <div className="experience-right">
                <img
                  src={experience.employerImage!}
                  alt={experience.employer}
                />
              </div>
            </div>
            <br />
            <ul className="experience-bulletpoint-list">
              {experience.bulletPoints.map((bulletPoint) => (
                <li className="experience-bulletpoint-item">{bulletPoint}</li>
              ))}
            </ul>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
