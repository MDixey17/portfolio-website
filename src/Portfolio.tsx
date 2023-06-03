import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="portfolio-content"></div>
    </div>
  );
};
