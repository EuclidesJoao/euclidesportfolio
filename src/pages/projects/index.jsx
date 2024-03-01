import "./index.css";
import { projects } from "../../data/projects";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container ">
      <ul className="projects d-flex align-items-center justify-content-center">
        {projects.map((project) => {
          return (
            <li className="project d-flex justify-content-between list-unstyled">
              <div className=" visual">
                <NavLink to={project.link} target="_blank">
                  <img src={project.image} alt="logo" className="im-fluid" />
                </NavLink>
              </div>

              <div className="description d-flex flex-column justify-content-between p-2">
                <h2>{project.name}</h2>

                <div>
                  <h5>Description</h5>
                  <p>{project.description}</p>
                </div>

                <div>
                  <h5>Tecnologias</h5>
                  <ul className="d-flex ">
                    {project.tecnologies.map((tech) => {
                      return <li key={tech}>{tech}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
