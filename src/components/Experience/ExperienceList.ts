import TargetLogo from "../../assets/target.png";
import MLBLogo from "../../assets/mlb.png";
import GELogo from "../../assets/gopheresports.png";
import { TechStackChip } from "../../models/TechStackChip";

// Icons and Images
import KotlinIcon from "../../assets/icons/kotlin.png";
import MongoDb from "../../assets/icons/mongodb.svg";
import {
  faJava,
  faReact,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import TypeScript from "../../assets/icons/typescript.png";
import Cypress from "../../assets/icons/cypress.png";
import Playwright from "../../assets/icons/playwright.png";
import UnrealEngine from "../../assets/icons/unrealengine.svg";
import Photoshop from "../../assets/icons/photoshop.png";
import Lightroom from "../../assets/icons/lightroom.png";
import DavinciResolve from "../../assets/icons/davinciresolve.png";
import Storybook from "../../assets/icons/storybook.svg";
import Docker from "../../assets/icons/docker.png";
import Postgres from "../../assets/icons/postgres.png";

type ExperienceDetails = {
  employer: string;
  title: string;
  location: string;
  timespan: string;
  bulletPoints: string[];
  techstack: TechStackChip[];
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
      "Implemented enhancements to multiple full-stack applications used by all sourcing and supply chain managers that led to saving the company over $60,000 in a single use case.",
      "Mastered several modern programming languages and frameworks such as TypeScript, React, Kotlin, Spring Boot, MongoDB, PostgreSQL, and Docker through collaboration with senior engineers.",
      "Pioneered a Slack Bot project with other program members to uniquely benefit team members across the company using Golang and PostgreSQL.",
      "Mentored 4 recent college graduates on engineering expectations, transitioning to full-time employment, and understanding the basics of unique technologies used by the company.",
    ],
    techstack: [
      { name: "Java", avatar: faJava, color: "#f89820", bgColor: "black" },
      { name: "Kotlin", avatar: KotlinIcon },
      { name: "Spring Boot", avatar: "</>" },
      { name: "MongoDB", avatar: MongoDb },
      { name: "PostgreSQL", avatar: Postgres },
      { name: "React", avatar: faReact, color: "#61dbfb", bgColor: "black" },
      { name: "TypeScript", avatar: TypeScript },
      { name: "Ag-Grid", avatar: "</>" },
      { name: "Cypress", avatar: Cypress, bgColor: "white" },
      { name: "Playwright", avatar: Playwright },
      { name: "Docker", avatar: Docker },
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
      { name: "Unreal Engine", avatar: UnrealEngine, bgColor: "white" },
      { name: "Adobe Photoshop", avatar: Photoshop },
      { name: "Adobe Lightroom", avatar: Lightroom },
      { name: "Davinci Resolve", avatar: DavinciResolve },
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
    techstack: [
      {
        name: "JavaScript",
        avatar: faJsSquare,
        color: "#F0DB4F",
        bgColor: "black",
      },
      { name: "HTML", avatar: "</>" },
      { name: "CSS", avatar: "</>" },
      { name: "React", avatar: faReact, color: "#61dbfb", bgColor: "black" },
      { name: "Storybook", avatar: Storybook },
    ],
    employerImage: MLBLogo,
  },
];
