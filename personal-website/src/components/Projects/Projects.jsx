import React from "react";
import "./Projects.css";
import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";

function Projects(props) {
  return (
    <div>
      <>
        <div className="projects">
          <p id="projects-title">Projects</p>
          <hr id="projects-break" />
          <div id="projects-content">
            <Project1 />
            <Project2 />
            <div id="project-3">this is project 3</div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Projects;
