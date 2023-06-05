type ProjectDetails = {
  name: string;
  link?: string;
  description: string;
  techstack: string[];
  thumbnail: string;
};

// When ready to add a new project, copy and paste the following line at the front of the list
// { name: "", description: "", techstack: [], thumbnail: "" },
export const projectList: ProjectDetails[] = [
  {
    name: "GoldyBot",
    description:
      "A Rocket League match history Discord bot to rapidly provide information for content teams. View relevant recent matches and competitive rosters throughout Collegiate Rocket League via Discord Slash Commands.",
    techstack: ["Discord API", "JavaScript", "SQLite"],
    thumbnail: "",
  },
  {
    name: "ScrimBot",
    description:
      "A Discord bot that listens to various competitive Rocket League communities' requests for scrimmages. Search for scrimmages and filter by MMR, date, and time.",
    techstack: ["Discord API", "Web Sockets", "JavaScript", "SQLite"],
    thumbnail: "",
  },
  {
    name: "UMN Hype Chamber",
    description: "",
    techstack: ["Unreal Engine", "C++", "Blender", "Adobe Photoshop"],
    thumbnail: "",
  },
  {
    name: "Strelka Scanner",
    description: "",
    techstack: ["Python"],
    thumbnail: "",
  },
  {
    name: "Dystopian Defier",
    description: "",
    techstack: ["Unity", "C#", "Blender"],
    thumbnail: "",
  },
];
