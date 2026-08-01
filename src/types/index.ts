export interface EducationEntry {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  detail: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  icon: string;
}

export interface Publication {
  title: string;
  journal: string;
  authors: string;
  year: string;
  abstract: string;
  doi?: string;
  status: "Published" | "In Review" | "In Preparation";
}

export type ProjectDomain =
  | "Research"
  | "Simulation"
  | "Mechanical Design"
  | "Automation"
  | "CAD"
  | "Medical Devices";

export interface Project {
  slug: string;
  title: string;
  description: string;
  domains: ProjectDomain[];
  technologies: string[];
  challenge: string;
  result: string;
}
