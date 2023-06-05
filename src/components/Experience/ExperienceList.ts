import TargetLogo from "../../assets/target.png";
import MLBLogo from "../../assets/mlb.png";
import GELogo from "../../assets/gopheresports.png";

type ExperienceDetails = {
  employer: string;
  title: string;
  location: string;
  timespan: string;
  bulletPoints: string[];
  techstack: string[];
  employerImage?: string;
};

// When ready to add a new Experience, here is the template
// {employer: '', title: '', location: '', timespan: '', bulletPoints: [], techstack: []}
export const experienceList: ExperienceDetails[] = [
  {
    employer: "Target",
    title: "TLP - Software Engineer",
    location: "Brooklyn Park, MN",
    timespan: "January 2023 - Present",
    bulletPoints: [
      "Participated in Target's Technology Leadership Program for one year to understand company culture, environment, and engineering standards.",
      "Enhanced the full-stack application used by sourcing managers to show realtime statistics with vendor bids and associated profit margins.",
      "Contributed to a Slack Bot project with fellow TLPs to improve the Target workspace.",
    ],
    techstack: [
      "Kotlin",
      "MongoDB",
      "Spring Boot",
      "Java",
      "React",
      "TypeScript",
      "Ag-Grid",
      "Cypress",
      "Playwright",
    ],
    employerImage: TargetLogo,
  },
  {
    employer: "Esports at the University of Minnesota",
    title: "Director of Content, Social Media Manager",
    location: "Minneapolis, MN",
    timespan: "September 2021 - December 2022",
    bulletPoints: [
      "Utilized Unreal Engine to create custom high-quality motion graphics to improve production value on club broadcasts.",
      "Organized and executed social media marketing campaigns to lead two $50,000 national social media competitions.",
      "Designed and integrated more than 100 unique content pieces to increase social media impressions by 500%.",
    ],
    techstack: [
      "Unreal Engine",
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Davinci Resolve",
    ],
    employerImage: GELogo,
  },
  {
    employer: "Major League Baseball",
    title: "Software Engineering Intern",
    location: "New York, NY",
    timespan: "June 2022 - August 2022",
    bulletPoints: [
      "Shadowed the Director of Engineering for Baseball Data throughout the nine week internship program, optimizing and beta testing new features.",
      "Resolved more than 40 bugs in the new MLB Gameday webpage that current has over 10 million active users.",
      "Participated in the agile development practice using two week sprints and Jira as the project management application.",
      "Implemented multiple features to improve the user interface and experience in Gameday Live Feed component, meeting design requirements put forth by the product team.",
      "Ideated with the SVP of Creative Content and Marketing on a series of implementations to increase young adult viewership during Q2 of 2023.",
    ],
    techstack: ["JavaScript", "HTML", "CSS", "React", "Storybook"],
    employerImage: MLBLogo,
  },
];
