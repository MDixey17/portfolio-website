import GoldyBot from "../../assets/projects/goldybot.png";
import ScrimBot from "../../assets/projects/scrimbot.png";
import HypeChamber from "../../assets/projects/hype-chamber.png";
import DystopianDefier from "../../assets/projects/dystopian-defier.png";
import Strelka from "../../assets/projects/strelka.png";
import { TechStackChip } from "../../models/TechStackChip";
import {
  faDiscord,
  faJsSquare,
  faPython,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import UnrealEngine from "../../assets/icons/unrealengine.svg";
import Photoshop from "../../assets/icons/photoshop.png";
import Sqlite from "../../assets/icons/sqlite.png";
import Blender from "../../assets/icons/blender.png";
import Cplusplus from "../../assets/icons/c++.png";
import Csharp from "../../assets/icons/csharp.svg";

type ProjectDetails = {
  name: string;
  link?: string;
  description: string;
  techstack: TechStackChip[];
  thumbnail: string;
};

// When ready to add a new project, copy and paste the following line at the front of the list
// { name: "", description: "", techstack: [], thumbnail: "" },
export const projectList: ProjectDetails[] = [
  {
    name: "GoldyBot",
    description:
      "A Rocket League match history Discord bot to rapidly provide information for content teams. View relevant recent matches and competitive rosters throughout Collegiate Rocket League via Discord Slash Commands.",
    techstack: [
      {
        name: "Discord API",
        avatar: faDiscord,
        color: "#7289d9",
        bgColor: "black",
      },
      {
        name: "JavaScript",
        avatar: faJsSquare,
        color: "#F0DB4F",
        bgColor: "black",
      },
      { name: "SQLite", avatar: Sqlite },
    ],
    thumbnail: GoldyBot,
    link: "https://discord.com/api/oauth2/authorize?client_id=994738484730417313&permissions=380104673280&scope=bot",
  },
  {
    name: "ScrimBot",
    description:
      "A Discord bot that listens to various competitive Rocket League communities' requests for scrimmages. Search for scrimmages and filter by MMR, date, and time.",
    techstack: [
      {
        name: "Discord API",
        avatar: faDiscord,
        color: "#7289d9",
        bgColor: "black",
      },
      {
        name: "JavaScript",
        avatar: faJsSquare,
        color: "#F0DB4F",
        bgColor: "black",
      },
      { name: "SQLite", avatar: Sqlite },
      { name: "Web Sockets", avatar: "</>" },
    ],
    thumbnail: ScrimBot,
    link: "https://discord.com/api/oauth2/authorize?client_id=1047191564180520980&permissions=517543906304&scope=bot",
  },
  {
    name: "UMN Hype Chamber",
    description:
      "An Epic Games open source project intended for high quality sports motion graphics, I was part of a small team that took the project and tailor made it to be Golden Gopher themed. This included designing custom textures, 3D models, and modulating the project to easily be used for other collegiate esports programs across the United States.",
    techstack: [
      { name: "Unreal Engine", avatar: UnrealEngine, bgColor: "white" },
      { name: "C++", avatar: Cplusplus },
      { name: "Blender", avatar: Blender },
      { name: "Adobe Photoshop", avatar: Photoshop },
    ],
    thumbnail: HypeChamber,
    link: "https://www.youtube.com/watch?v=HwYxx8k3Fyc",
  },
  {
    name: "Strelka Scanner",
    description:
      "As part of a two semester course at the University of Minnesota, I contributed to Target's open source file scanner called Strelka. My fellow students and I researched how cyber criminals conceal scripts and messages inside three image types and built a program to detect these messages.",
    techstack: [
      { name: "Python", avatar: faPython, color: "#4584b6" },
      { name: "Steganography", avatar: "</>" },
    ],
    thumbnail: Strelka,
  },
  {
    name: "Dystopian Defier",
    description:
      "Welcome to the ruined city of Varkamon. You play as Su, a rebel renegade fighting hordes of enemy bots in a dystopian future. However, your life is directly tied to your money. As you fight you can grow your health pool, but beware as the legion of bots grows stronger with each passing second.",
    techstack: [
      { name: "Unity", avatar: faUnity, color: "#000000" },
      { name: "C#", avatar: Csharp },
      { name: "Blender", avatar: Blender },
    ],
    thumbnail: DystopianDefier,
    link: "https://boschybee.itch.io/dystopian-defiers",
  },
];
