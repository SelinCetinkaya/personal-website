import React from "react";

function Project3(props) {
  return (
    <div className="project">
      <p className="project-text">
        Impression is a photo-sharing web-app where users can upload images,
        edit their posts, comment on others' posts, and "like" images. For this
        project I used Ruby on Rails for the back-end and React for the
        front-end.
        <br />
        <br />
        <a
          className="github-link"
          href="https://github.com/SelinCetinkaya/impression"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="deployed-site-link"
          href="https://impression-project.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>
      </p>
      <img
        className="project-3-image"
        src="https://i.imgur.com/k5Arai6.png"
        alt="project3"
      />
    </div>
  );
}

export default Project3;
