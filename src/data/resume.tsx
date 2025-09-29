import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ResumeData } from "@/lib/types";

export const DATA: ResumeData = {
  // Dummy comment to force recompilation
  name: "Robert Dumitriu",
  initials: "RDD",
  url: "https://robertcv.xyz",
  location: "Bucharest, RO",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I design systems, write essays, and make videos about AI, philosophy, and culture. Driven by curiosity, ownership, and a love for making complex ideas accessible.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Javascript",
    "Postman",
    "Docker",
    "Illustrator",
    "Premiere Pro",
    "Photoshop",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/roblanc",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/robert-d-1681a11a7/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@robertus55/videos",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Digital Strategy & Automation Consultant",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Strategy, Systems & Enablement",
      logoUrl: "/atomic.png",
      start: "2021",
      end: "Present",
      description:
        "Currently focused on building intelligent automations and AI-powered tools at the intersection of development and content creation, using Python, TypeScript, and a growing suite of CLI utilities. Inspired by the growing power of command-line interfaces, I'm currently focused on the world of automation.",
    },
    {
      company: "PTC",
      badges: [],
      href: "https://ptc.com",
      location: "Bucharest, RO",
      title: "Software Marketing Global Specialist",
      logoUrl: "/PTC.svg",
      start: "2016",
      end: "2020",
      description:
        "I worked at PTC Eastern Europe as a Global Marketing & Communications Specialist, where I focused on digital enablement and partner success. I delivered 50+ global webinars, redesigned UX flows to improve user engagement, and managed LMS platforms to scale training programs. I also wrote and distributed a newsletter for 200,000+ subscribers, produced technical content, collaborated with Agile teams, and optimized Salesforce pipelines to streamline partner management. In this role, I sat at the intersection of marketing, technology, and operations, making sure both internal teams and external partners had the tools, training, and communication needed to perform effectively.",
    },
    {
      company: "PTC",
      href: "https://ptc.com/",
      badges: [],
      location: "Bucharest, RO",
      title: "Software Marketing Intern",
      logoUrl: "/PTC.svg",
      start: "2015",
      end: "2016",
      description:
        "During my internship at PTC Eastern Europe, I supported the marketing and partner enablement teams by assisting with digital campaigns, content creation, and event coordination. I helped organize webinars and workshops, contributed to drafting internal and external communications, and gained hands-on experience with tools like Salesforce and LMS platforms. The role gave me early exposure to how global marketing operations work in practice, from managing partner communications to supporting technical content delivery, and it laid the foundation for my later full-time role at PTC.",
    },
  ],
  education: [
    {
      school: "University of Bucharest",
      href: "https://www.fabiz.ase.ro/",
      degree: "Master's Degree in Business Administration in Foreign Languages",
      logoUrl: "/unibuc.png",
      start: "2016",
      end: "2019",
    },
    {
      school: "University of Bucharest",
      href: "https://lls.unibuc.ro",
      degree: "Bachelor's Degree in Applied Modern Languages",
      logoUrl: "/unibuc.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [

    {
      title: "Papyrus.ink",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "Built Papyrus.ink, a service that delivers 500+ literary classics in digestible email chunks with a personalized reading cadence and retro 8‑bit cover art, making it effortless to fit quality literature into daily routines.",
      technologies: ["Python", "Flask", "Cron", "CSS", "JavaScript", "HTML", "CSS", "Figma"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/papyrusink.mp4",
    },
  ],
  bookReviews: [
    {
      id: "hohKcIioi4w",
    },
    {
      id: "m3tyYkoXgPo",
    },
    {
      id: "uVeTxbiq9i4",
    },
    {
      id: "QEWYM7YrDE8",
    },
  ],
  videoEssays: [
    {
      id: "wV0w2h_Tq3E",
    },
    {
      id: "mgAnCuhyKiM",
    },
  ],
};
