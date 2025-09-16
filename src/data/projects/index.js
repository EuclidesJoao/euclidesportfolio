// src/data/projects.js

// --- Icon Imports ---
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCss3,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql, SiCsharp, SiExpress } from "react-icons/si";

// --- Image Imports ---
import livraria_paulinas from "../../assets/images/png/10000.png";
import correios_de_angola from "../../assets/images/png/10001.png";
import intermediario from "../../assets/images/png/10002.png";
import inp from "../../assets/images/png/10003.png";
import nkcb from "../../assets/images/png/10004.png";
import kyensino from "../../assets/images/png/10005.png";

export const projects = [
  {
    id: 1,
    name: "Livraria Paulinas",
    role: "Frontend Developer",
    link: "https://paulinas.co.ao/",
    image: livraria_paulinas,
    description:
      "An online library where users can reserve books and pay upon delivery. The UI is fully responsive, allowing easy navigation on any device.",
    technologies: [
      { name: "GitHub", icon: <FaGithub className="icon" /> },
      { name: "HTML5", icon: <FaHtml5 className="icon" /> },
      { name: "CSS3", icon: <FaCss3 className="icon" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="icon" /> },
      { name: "JavaScript", icon: <RiJavascriptFill className="icon" /> },
      { name: "MySQL", icon: <SiMysql className="icon" /> },
      { name: "C#", icon: <SiCsharp className="icon" /> },
    ],
  },
  {
    id: 2,
    name: "NKCB",
    role: "Full-Stack Developer",
    link: "https://nkcbangola.com/",
    image: nkcb,
    description:
      "It is company which offer a wide range of services, including human resources, tax consulting... I developed the front-end, and the back-end",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="icon" /> },
      { name: "CSS3", icon: <FaCss3 className="icon" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="icon" /> },
      { name: "JavaScript", icon: <RiJavascriptFill className="icon" /> },
    ],
  },
  {
    id: 3,
    name: "Intermediário",
    role: "Full-Stack Developer",
    link: "#",
    image: intermediario,
    description:
      "A platform designed to connect service providers with clients efficiently. Features include user authentication, service listings, a real-time chat, and a booking system.",
    technologies: [
      { name: "Next.js", icon: <TbBrandNextjs className="icon" /> },
      { name: "React Native", icon: <FaReact className="icon" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="icon" /> },
      { name: "MongoDB", icon: <SiMongodb className="icon" /> },
    ],
  },
  {
    id: 6,
    name: "Correios de Angola",
    role: "Frontend Developer",
    link: "https://www.correiosdeangola.ao/",
    image: correios_de_angola,
    description:
      "Developed the front-end for the official Correios de Angola website, integrating with back-end APIs to handle package tracking, service information, and news updates.",
    technologies: [
      { name: "React", icon: <FaReact className="icon" /> },
      { name: "JavaScript", icon: <RiJavascriptFill className="icon" /> },
      { name: "HTML5", icon: <FaHtml5 className="icon" /> },
      { name: "CSS3", icon: <FaCss3 className="icon" /> },
    ],
  },
  {
    id: 7,
    name: "INP (Instituto Nacional de Petróleos)",
    role: "Frontend Developer",
    link: "https://inp.gov.ao/",
    image: inp,
    description:
      "Engineered the front-end for the student portal at the Instituto Nacional de Petróleos, providing students with access to grades, schedules, and academic resources.",
    technologies: [
      { name: "React", icon: <FaReact className="icon" /> },
      { name: "JavaScript", icon: <RiJavascriptFill className="icon" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="icon" /> },
      { name: "HTML5", icon: <FaHtml5 className="icon" /> },
    ],
  },
  {
    id: 5,
    name: "KyEnsino",
    role: "Frontend Developer",
    link: "#", // Use '#' for placeholder links
    image: kyensino,
    description:
      "A comprehensive school management platform built with React. It features user authentication and connects to a back-end API to manage student, teacher, and course information.",
    technologies: [
      { name: "React", icon: <FaReact className="icon" /> },
      { name: "JavaScript", icon: <RiJavascriptFill className="icon" /> },
      { name: "CSS3", icon: <FaCss3 className="icon" /> },
      { name: "HTML5", icon: <FaHtml5 className="icon" /> },
    ],
  },
  {
    id: 8,
    name: "Skywalker",
    role: "Founder & Full-Stack Developer",
    link: "#", // Use '#' for placeholder links
    image: kyensino,
    description:
      "An e-commerce platform specializing in sneakers. Implemented features for product listings, user accounts, shopping cart functionality, and secure online payment processing.",
    technologies: [
      { name: "Next.js", icon: <TbBrandNextjs className="icon" /> },
      { name: "Node.js", icon: <FaNodeJs className="icon" /> },
      { name: "Express", icon: <SiExpress className="icon" /> },
      { name: "MongoDB", icon: <SiMongodb className="icon" /> },
      { name: "React", icon: <FaReact className="icon" /> },
    ],
  },
];
