import type { TeamMember } from "../types/engineer.types";

export const teamMembers: TeamMember[] = [
  {
    name: "Leonardo J. Ramirez",
    role: "CEO",
    bio: "Leonardo helps growing businesses turn messy systems into clearer, faster ways of working. He leads strategy across websites, automation, and practical AI so teams can move with more confidence and less friction.",
    profilePic: "/images/about-us/leonardo_j_ramirez_headshot.jpg",

    stats: [
      { label: "Years leading strategy and delivery", value: "7+" },
      { label: "Businesses advised", value: "15+" },
    ],

    socials: [
      {
        href: "https://www.linkedin.com/in/leonardo-j-ramirez",
        icon: "/images/about-us/linkedin.svg",
      },
      {
        href: "https://github.com/R3d5tatic",
        icon: "/images/about-us/github.svg",
      },
      {
        href: "https://evergreen-clarinet-413.notion.site/Leonardo-J-Ramirez-abf55c6b109249059f3b3c4fc8cf29e0",
        icon: "/images/about-us/resume.svg",
      },
    ],

    // New fields
    primaryExpertise: ["AI/ML", "Full-Stack", "DevOps"],
    topSkills: [
      {
        name: "LangGraph / LangChain",
        level: 95,
        category: "AI / LLM Frameworks",
      },
      { name: "Python", level: 95, category: "Programming Languages" },
      { name: "Elasticsearch", level: 90, category: "Search / Vector DBs" },
      { name: "PenTest+ / CEH", level: 90, category: "Security / Cyber Ops" },
      { name: "React / Remix.js", level: 85, category: "Frontend" },
      {
        name: "JavaScript / TypeScript",
        level: 85,
        category: "Programming Languages",
      },
      { name: "LlamaIndex", level: 85, category: "AI / LLM Frameworks" },
      { name: "C#", level: 80, category: "Programming Languages" },
      { name: "Node.js / Express", level: 80, category: "Backend / APIs" },
      {
        name: "Docker / Kubernetes",
        level: 80,
        category: "DevOps / Automation",
      },
    ],
    highlights: [
      "Helps founders turn complex tech decisions into clear next steps",
      "Designs systems that remove friction across sales and operations",
      "Builds practical AI and automation around real business workflows",
    ],
  },

  {
    name: "William J. Baltus",
    role: "CTO",
    bio: "William helps businesses use AI in ways that feel useful, reliable, and grounded in real operations. He focuses on turning repetitive work, search challenges, and support bottlenecks into smarter systems that save time.",
    profilePic: "/images/about-us/william_j_baltus_headshot.png",

    stats: [
      { label: "AI systems launched", value: "15+" },
      { label: "Businesses advised", value: "12+" },
    ],

    socials: [
      {
        href: "https://www.linkedin.com/in/william-baltus",
        icon: "/images/about-us/linkedin.svg",
      },
      {
        href: "https://github.com/WilliamBaltus",
        icon: "/images/about-us/github.svg",
      },
      {
        href: "https://grey-cloth-861.notion.site/William-Jaunius-Baltus-e4729f9c870f4ab4a0421ca461e07b57",
        icon: "/images/about-us/resume.svg",
      },
    ],

    // New fields
    primaryExpertise: ["AI/ML", "Automation"],
    topSkills: [
      {
        name: "LangGraph / LangChain",
        level: 90,
        category: "AI / LLM Frameworks",
      },
      { name: "Python", level: 90, category: "Programming Languages" },
      { name: "TensorFlow", level: 85, category: "AI / LLM Frameworks" },
      { name: "UiPath", level: 85, category: "RPA / Automation" },
      { name: "PyTorch", level: 80, category: "AI / LLM Frameworks" },
      { name: "C#", level: 80, category: "Programming Languages" },
      {
        name: "Docker / Kubernetes",
        level: 80,
        category: "DevOps / Automation",
      },
      { name: "Streamlit", level: 80, category: "Frontend / Apps" },
      { name: "Blue Prism", level: 75, category: "RPA / Automation" },
      { name: "Elasticsearch", level: 75, category: "Search / Vector DBs" },
    ],
    highlights: [
      "Builds AI systems that support teams instead of replacing good judgment",
      "Turns repetitive work into repeatable automation",
      "Keeps AI projects grounded in measurable business value",
    ],
  },
];
