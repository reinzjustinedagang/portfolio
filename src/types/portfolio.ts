import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  category: "Frontend" | "Backend" | "Tools" | "Software" | "Database";
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  outcome: string;
}

export interface Role {
  company: string;
  title: string;
  period: string;
  scope: string;
  highlights: string[];
}
