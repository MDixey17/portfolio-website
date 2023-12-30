import { TechStackChip } from "../../models/TechStackChip";
import Csharp from "../../assets/icons/csharp.svg";
import Postgres from "../../assets/icons/postgres.png";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

type CertificateDetails = {
  name: string;
  issuer: string;
  date: string;
  techstack: TechStackChip[];
  link: string;
};

// When ready to add a new certificate, here is the template
// {name: '', issuer: '', date: '', techstack: [], link: ''},
export const certificateList: CertificateDetails[] = [
  {
    name: "SQL for Data Science",
    issuer: "Coursera",
    date: "Oct. 2023",
    techstack: [{ name: "PostgreSQL", avatar: Postgres }],
    link: "https://www.coursera.org/account/accomplishments/certificate/U9DEVGUCQ92Y",
  },
  {
    name: "C# Programming for Unity Game Development Specialization",
    issuer: "Coursera",
    date: "Dec. 2023",
    techstack: [
      { name: "Unity", avatar: faUnity, color: "#000000" },
      { name: "C#", avatar: Csharp },
      { name: "2D Game Physics", avatar: "</>" },
    ],
    link: "https://www.coursera.org/account/accomplishments/specialization/M3X5F6HTAJQD",
  },
];
