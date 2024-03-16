import livraria_paulinas from "../../assets/images/png/10000.png";
import {
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  CsharpIcon,
  MySQLIcon,
  BootstrapIcon,
} from "../skills";

export const projects = [
  {
    name: "Livraria Paulinas",
    role: "Frontend Developer",
    link: "https://paulinas.co.ao/",
    image: livraria_paulinas,
    description: `
      Livraria Paulinas is an online library. 
      Where you can reserve a book and make the payment upon delivery
      which has a UI that allows you to navigate on different devices. 
    `,
    tecnologies: [
      <JavaScriptIcon />,
      <HTML5Icon />,
      <CSS3Icon />,
      <CsharpIcon />,
      <MySQLIcon />,
      <BootstrapIcon />,
    ],
  },
];
