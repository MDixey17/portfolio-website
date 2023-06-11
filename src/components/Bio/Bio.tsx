import React, { useState } from "react";
import ProHeadshot from "../../assets/headshot-square.png";
import Spiderman from "../../assets/spiderman-logo.png";
import Mandalorian from "../../assets/mando.png";
import "./Bio.css";

export const Bio = () => {
  const [activeImage, setActiveImage] = useState<string>(ProHeadshot);

  const handleMouseOver = () => {
    if (Math.random() < 0.5) {
      setActiveImage(Spiderman);
    } else {
      setActiveImage(Mandalorian);
    }
  };

  const handleMouseOut = () => {
    setActiveImage(ProHeadshot);
  };

  return (
    <div className="bio-container">
      <img
        src={activeImage}
        alt="Matthew Dixey"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <h1>Matthew Dixey</h1>
      <h2>Software Engineer at Target</h2>
      <p>
        I am a full-stack engineer that looks forward to learning something new
        every day.
      </p>
    </div>
  );
};
