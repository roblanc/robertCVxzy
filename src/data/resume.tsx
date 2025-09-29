import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
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
      company: "Consultant",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
      end: "20016",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
