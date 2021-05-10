import React from "react";
import "./Projects.css";
import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";
import Project3 from "../Project3/Project3";

function Projects(props) {
  return (
    <div className="projects">
      <p id="projects-title">Projects</p>
      <hr id="projects-break" />
      <div id="projects-content">
        <Project1 />
        <hr className="project-break" />
        <Project2 />
        <hr className="project-break" />
        <Project3 />
      </div>
      <hr className="between-break" />
    </div>
  );
}

export default Projects;
