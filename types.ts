import type { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  imageUrl: string;
  status?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  proficiency: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  icon?: ReactNode;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  icon?: ReactNode;
}

export interface Achievement {
  title: string;
  description: string;
  icon?: ReactNode;
}