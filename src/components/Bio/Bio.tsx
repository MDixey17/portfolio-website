import React from "react";
import ProHeadshot from "../../assets/headshot-square.png";
import "./Bio.css";

export const Bio = () => {
  // TODO: let's do a cool hover animation for the headshot
  return (
    <div className="bio-container">
      <img src={ProHeadshot} alt="Matthew Dixey" />
      <h1>Matthew Dixey</h1>
      <h2>Software Engineer at Target</h2>
      <p>
        I am a full-stack engineer that looks forward to learning something new
        every day.
      </p>
    </div>
  );
};
