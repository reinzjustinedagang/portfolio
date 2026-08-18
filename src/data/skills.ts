import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiPostman,
  SiDotnet,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

import { Skill } from "../types/portfolio";

export const skills: Skill[] = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: SiCss,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
  },
  {
    name: "C#",
    icon: SiDotnet,
    category: "Software",
  },
  {
    name: "Java",
    icon: DiJava,
    category: "Software",
  },
];
