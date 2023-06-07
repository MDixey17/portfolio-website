import React from "react";
import "./Experience.css";
import { experienceList } from "./ExperienceList";
import { Avatar, Chip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <div className="tech-chips">
              {experience.techstack.map((tech) => (
                <div className="experience-tech-chip">
                  <Chip
                    label={tech.name}
                    variant="outlined"
                    style={{ color: "#E6E6E6", borderColor: "#5DD2FE" }}
                    avatar={
                      typeof tech.avatar === "string" ? (
                        tech.avatar === "</>" ? (
                          <Avatar>{"</>"}</Avatar>
                        ) : (
                          <Avatar alt={tech.name} src={tech.avatar} />
                        )
                      ) : (
                        <Avatar>
                          <FontAwesomeIcon
                            icon={tech.avatar}
                            size="2x"
                            color={tech.color!}
                          />
                        </Avatar>
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
