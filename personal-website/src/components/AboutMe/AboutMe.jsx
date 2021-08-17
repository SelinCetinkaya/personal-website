import React from "react";
import "./AboutMe.css";

function AboutMe({ smallHeader }) {
  return (
    <>
      <div className={`${smallHeader ? "small-about-me" : "about-me"}`}>
        <p id="about-me-title">About Me</p>
        <hr id="about-me-break" />
        <p id="about-me-content">
          Hello! I'm Selin Cetinkaya (seh-LIN CHE-tin-KAI-ya). I am a
          quick-thinking software engineer with a background in real estate and
          a passion for learning. Consistent, communicative, and thorough, I
          enjoy customizing solutions for a specific client or situation. With
          years of experience as a realtor in Austin, TX, I am skilled at
          quickly coming up with unique solutions to problems and look forward
          to future opportunities to grow as a software engineer.
        </p>
        <hr className="between-break" />
      </div>
    </>
  );
}

export default AboutMe;
