import React from "react";
import { LucideIcon } from "lucide-react";

export type ResumeData = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: { href: string; icon: LucideIcon; label: string }[];
  contact: {
    email: string;
    tel: string;
    social: {
      GitHub: SocialLink;
      LinkedIn: SocialLink;
      X: SocialLink;
      Youtube: SocialLink;
      email: SocialLink;
    };
  };
  work: WorkExperience[];
  education: EducationEntry[];
  projects: ProjectEntry[];
  bookReviews: VideoEntry[];
  videoEssays: VideoEntry[];
};

type SocialLink = {
  name: string;
  url: string;
  icon: React.ElementType;
  navbar: boolean;
};

type WorkExperience = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

type EducationEntry = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type ProjectEntry = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: React.ReactElement }[];
  image: string;
  video: string;
};

type VideoEntry = {
  id: string;
};
