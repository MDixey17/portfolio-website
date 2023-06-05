import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./Portfolio.css";
import { PortfolioRight } from "./components/PortfolioRight";
import { PortfolioLeft } from "./components/PortfolioLeft";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="portfolio-content">
        <PortfolioLeft />
        <PortfolioRight />
      </div>
    </div>
  );
};
