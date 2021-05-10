import React from "react";

function Project1(props) {
  return (
    <div className="project">
      <p className="project-text">
        Stock-Up is an app used for organizing your grocery list based on
        categories. You can set up the categories however you wish. I have them
        separated by aisles in a grocery store to make shopping more efficient.
        This was the first experience using React to create an entire front-end
        experience. I used Airtable as an API for fetching, editing, and
        deleting data.
        <br />
        <br />
        <a
          className="github-link"
          href="https://github.com/SelinCetinkaya/stock-up"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="deployed-site-link"
          href="https://peaceful-knuth-91276e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>
      </p>
      <img
        className="project-image"
        src="https://i.imgur.com/fEoQLjo.png"
        alt="project1"
      />
    </div>
  );
}

export default Project1;
