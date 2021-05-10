import React from "react";

function Project1(props) {
  return (
    <div className="project">
      <p className="project-text">
        Stock-Up is an app used for organizing your grocery list based on
        categories. You can set up the categories however you wish, but I have
        them separated by aisles in a grocery store where you might find that
        item.
      </p>
      <img
        className="project-image"
        src="https://i.imgur.com/fEoQLjo.png"
        alt="project-image"
      />
    </div>
  );
}

export default Project1;
