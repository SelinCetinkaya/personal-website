import React from "react";

function Project2(props) {
  return (
    <div className="project-2">
      <img
        className="project-2-image"
        src="https://i.imgur.com/qw2XHW5.png"
        alt="project2"
      />
      <p className="project-text">
        Collboreatery is community fed database for restaraunts. After signing
        up users have the ability to add their favorite restaraunt
        recomendations. Users can edit posts as well as save them for later. For
        this group project, we used React for the front-end and Mongo for the
        back-end.
        <br />
        <br />
        <a
          className="github-link"
          href="https://github.com/SelinCetinkaya/collaboreatery"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="deployed-site-link"
          href="https://collaboreatery.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>
      </p>
    </div>
  );
}

export default Project2;
