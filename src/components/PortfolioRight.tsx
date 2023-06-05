import { Experience } from "./Experience/Experience";
import { Project } from "./Project/Project";
import { Summary } from "./Summary/Summary";

export const PortfolioRight = () => {
  return (
    <div className="portfolio-right-container">
      <Summary />
      <hr style={{ width: "100%" }} />
      <Experience />
      <hr style={{ width: "100%" }} />
      <Project />
    </div>
  );
};
