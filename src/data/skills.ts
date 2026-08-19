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
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    category: "Frontend",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: SiCss,
    category: "Frontend",
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    color: "#339933",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    color: "#4479A1",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
    color: "#F05032",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    color: "#FF6C37",
  },
  {
    name: "C#",
    icon: SiDotnet,
    category: "Software",
    color: "#512BD4",
  },
  {
    name: "Java",
    icon: DiJava,
    category: "Software",
    color: "#ED8B00",
  },
];
