import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./Portfolio.css";
import { Bio } from "./components/Bio/Bio";
import { PortfolioRight } from "./components/PortfolioRight";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="portfolio-content">
        <Bio />
        <PortfolioRight />
      </div>
    </div>
  );
};
