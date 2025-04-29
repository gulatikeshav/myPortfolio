import {
  FaBriefcase,
  FaEnvelope,
  FaLaptopCode,
  FaProjectDiagram,
  FaTools,
  FaUser,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";

import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMacos, SiNetlify, SiReactrouter, SiRedux } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";

import { CiLink } from "react-icons/ci";

// import { FaGithub } from "react-icons/fa";
export const navItems = [
  { label: "Home", to: "/", icon: <FaUser /> },
  { label: "About", to: "/about", icon: <FaLaptopCode /> },
  { label: "Projects", to: "/projects", icon: <FaProjectDiagram /> },
  { label: "Skills", to: "/skills", icon: <FaTools /> },
  { label: "Education", to: "/education", icon: <MdCastForEducation /> },
  { label: "Experience", to: "/experience", icon: <FaBriefcase /> },
  { label: "Contact", to: "/contact", icon: <FaEnvelope /> },
];

export const SKILLS = [
  { icon: FaHtml5, skill: "HTML5" },
  { icon: IoLogoCss3, skill: "CSS3" },
  { icon: FaJs, skill: "JavaScript" },
  { icon: FaReact, skill: "React.js" },
  { icon: SiRedux, skill: "Redux" },
  { icon: SiReactrouter, skill: "React Router" },
  { icon: RiTailwindCssFill, skill: "Tailwind CSS" },
  { icon: FaGitAlt, skill: "Git" },
  { icon: FaGithub, skill: "GitHub" },
  { icon: SiNetlify, skill: "Netlify" },
  { icon: SiMacos, skill: "macOS" },
];


export const EDUCATIONS = [
  {
    course:
      "Bachelors in Computer Science Engineering · CGC Landran · PTU University",
    duration: "2021 - 2025 (May Expected)",
  },
  {
    course:
      "Intermediate (Non-Medical) , New Era Senior Secondary School, Tapa",
    duration: "2020-2021",
  },
  {
    course: "Metric , S.S.N. Senior Secondary School , Tapa",
    duration: "2018-2019",
  },
];


export const PROJECTS = [
  {
    title: "Portfolio",
    src: "/portfolio-img.png",
    features: [
      "Built using React.js for fast and component-driven UI.",
      "Used Tailwind CSS to create a responsive and modern design.",
      "Implemented React Router for seamless navigation between pages.",
      "Modular approach followed — components are organized in a maintainable structure for scalability.",
      // "Dark/Light mode toggle to enhance user experience based on preferences.",
    ],
    techStack: ["React js", "React Router", "Tailwind CSS", "Web Application"],
    liveLink: "https://your-ai-chat-app.vercel.app",
    repoLink: "https://github.com/your-username/gemini-chat-app",
  },
  {
    title: "QuickBite",
    src: "/quickBite-img.png",
    features: [
      "Integrated with Swiggy API to dynamically show restaurants and menus.",
      "Used Redux Toolkit to manage cart state globally.",
      "Implemented React Router for page navigation between Home, Restaurant Details, and Cart.",
      "Designed clean, responsive UI with smooth user experience using Tailwind CSS.",
    ],
    techStack: [
      "React js",
      "Redux",
      "React Router",
      "Tailwind CSS",
      "Web Application",
    ],
    liveLink: "https://snackshuttle.netlify.app",
    repoLink: "https://github.com/gulatikeshav/QuickBite",
  },
  {
    title: "Youtube Clone",
    src: "/yt-img.png",
    features: [
      "Built using React.js and Tailwind CSS for a modern, responsive UI.",
      "Used Redux Toolkit to manage global app state like menu toggle, chat-data and search caching.",
      "Integrated live search suggestions using Search Suggest API.",
      "Implemented React Router for seamless navigation between Home, Watch, and Results pages.",
      "Optimized performance with debouncing and caching for search results.",
    ],
    techStack: [
      "React js",
      "Redux",
      "React Router",
      "Tailwind CSS",
      "Web Application",
    ],
    liveLink: "https://play-hub.netlify.app",
    repoLink: "https://github.com/gulatikeshav/ytFrontend",
  },
  // {
  //   title: "WorkAssist",
  //   src: "/workAssist-img.png",
  //   features: [
  //     "⚙️ This project is currently in progress!",
  //     "Used Gemini API to handle natural language queries, generate, explain, and debug code.",
  //     "Custom expert agents for languages like C++, Java, Python etc — each responds in its unique tone.",
  //     "Improved user experience with prompt optimization and clear UX flow.",
  //     "Displays responses in a code-friendly UI with syntax highlighting.",
  //     "Smart scroll, auto-focus, and typing animation for realistic conversation flow.",
  //   ],
  //   techStack: [
  //     "React js",
  //     "Gemini Api",
  //     "React Router",
  //     "Tailwind CSS",
  //     "Web Application",
  //   ],
  //   liveLink: "https://your-ai-chat-app.vercel.app",
  //   repoLink: "https://github.com/your-username/gemini-chat-app",
  // },
];



 export const SUGGESTIONS_LIST = [
    { to: "/", page: "Introduction" },
    { to: "/about", page: "About" },
    { to: "/skills", page: "Skills" },
    { to: "/projects", page: "Projects" },
    { to: "/education", page: "Education" },
    { to: "/experience", page: "Experience" },
    { to: "/contact", page: "Contact" },
  ];

  export const SUGGESTED_LINKS = [
    { icon: <CiLink />, label: "Home", to: "/" },
    { icon: <CiLink />, label: "Blog", to: "/blog" },
    {
      icon: <FaGithub />,
      label: "Github",
      to: "https://github.com/gulatikeshav",
    },
  ];

const geminiProject = {
  title: "🤖 AI Chat App (Gemini API)",
  techStack: [
    "React.js",
    "Tailwind CSS",
    "Gemini API",
    "Context API / Redux (if used)",
  ],
  features: [
    "Used Gemini API to handle natural language queries, generate, explain, and debug code.",
    "Custom expert agents for languages like C++, Java, Python — each responds in its unique tone.",
    "Improved user experience with prompt optimization and clear UX flow.",
    "Displays responses in a code-friendly UI with syntax highlighting.",
    "Smart scroll, auto-focus, and typing animation for realistic conversation flow.",
  ],
  liveLink: "https://your-ai-chat-app.vercel.app",
  repoLink: "https://github.com/your-username/gemini-chat-app",
};
