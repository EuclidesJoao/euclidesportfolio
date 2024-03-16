import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCss3,
  FaHtml5,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TbJson, TbBrandNextjs } from "react-icons/tb";
import {
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCsharp,
} from "react-icons/si";

export const skills = [
  {
    name: "Figma",
    icon: <FaFigma className="icon" />,
  },

  {
    name: "GitHub",
    icon: <FaGithub className="icon" />,
  },

  {
    name: "HTML5",
    icon: <FaHtml5 className="icon" />,
  },

  {
    name: "CSS3",
    icon: <FaCss3 className="icon" />,
  },

  {
    name: "Bootstrap",
    icon: <FaBootstrap className="icon" />,
  },

  {
    name: "JavaScript",
    icon: <RiJavascriptFill className="icon" />,
  },

  {
    name: "Reactjs",
    icon: <FaReact className="icon" />,
  },

  {
    name: "NodeJs",
    icon: <FaNodeJs className="icon" />,
  },

  {
    name: "NestJs",
    icon: <SiNestjs className="icon" />,
  },

  {
    name: "Express.js",
    icon: <SiExpress className="icon" />,
  },

  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="icon" />,
  },

  {
    name: "JSON",
    icon: <TbJson className="icon" />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb className="icon" />,
  },

  {
    name: "MySQL",
    icon: <SiMysql className="icon" />,
  },

  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="icon" />,
  },

  {
    name: "Csharp",
    icon: <SiCsharp className="icon" />,
  },

  {
    name: "Nextjs",
    icon: <TbBrandNextjs className="icon" />,
  },

  {
    name: "React Native",
    icon: <FaReact className="icon" />,
  },
];

export const JavaScriptIcon =()=> {
  return <RiJavascriptFill className="icon"/>
};

export const HTML5Icon =()=> {
    return <FaHtml5 className="icon"/>
}

export const CSS3Icon =()=> {
    return <FaCss3 className="icon"/>
}
export const CsharpIcon =()=> {
    return <SiCsharp className="icon"/>
}

export const FigmapIcon =()=> {
    return <FaFigma className="icon"/>
}

export const MySQLIcon =()=> {
    return <SiMysql className="icon"/>
}

export const BootstrapIcon =()=> {
    return <FaBootstrap className="icon"/>
}
