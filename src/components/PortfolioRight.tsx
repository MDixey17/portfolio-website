import { Experience } from "./Experience/Experience";
import { Project } from "./Project/Project";
import { Summary } from "./Summary/Summary";

export const PortfolioRight = () => {
  return (
    <div className="portfolio-right-container">
      <hr style={{ width: "100%" }} id="about" className="section-line" />
      <Summary />
      <hr style={{ width: "100%" }} id="experience" className="section-line" />
      <Experience />
      <hr style={{ width: "100%" }} id="projects" className="section-line" />
      <Project />
      <hr style={{ width: "100%" }} id="projects" className="section-line" />
    </div>
  );
};
