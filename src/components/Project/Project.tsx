import React from "react";
import "./Project.css";
import { projectList } from "./ProjectList";
import { Avatar, Chip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Project = () => {
  return (
    <div className="project-container">
      <h3>PROJECTS</h3>
      <br />
      <div className="project-content">
        {projectList.map((project) => (
          <>
            <div className="project-info">
              {project.link !== undefined ? (
                <a href={project.link} className="project-link">
                  <h4>{project.name} &#x2197;</h4>
                </a>
              ) : (
                <h4>{project.name}</h4>
              )}
              <p>{project.description}</p>
              <div className="tech-chips">
                {project.techstack.map((tech) => (
                  <div className="project-tech-chip">
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
              <img
                className="project-thumbnail"
                src={project.thumbnail}
                alt={project.name}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
