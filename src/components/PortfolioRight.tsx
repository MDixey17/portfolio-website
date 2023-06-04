import { Experience } from "./Experience/Experience";
import { Summary } from "./Summary/Summary";

export const PortfolioRight = () => {
  return (
    <div className="portfolio-right-container">
      <Summary />
      <Experience />
    </div>
  );
};
