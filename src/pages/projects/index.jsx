import "./index.css";
import { projects } from "../../data/projects";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container-fluid">
      <div className="content">
        <div
          id="carouselExampleIndicators"
          className="carousel slide d-flex align-items-center justify-content-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div class="carousel-item active">
              <div className="project d-flex align-items-center justify-content-center">
                <div className="visual">
                  <img
                    src={projects[0].image}
                    alt="logo"
                    className="img-fluid"
                  />
                </div>

                <div className="description d-flex flex-column justify-content-between p-2">
                  <h2>
                    <NavLink to={projects[0].link}>{projects[0].name}</NavLink>
                  </h2>

                  <div className="mt-md-2">
                    <h5>Description</h5>
                    <p>{projects[0].description}</p>
                  </div>

                  <div className="mt-md-2">
                    <h5>Role</h5>
                    <p>{projects[0].role}</p>
                  </div>

                  <div className="techs mt-md-2">
                    <h5>Tecnologies</h5>
                    <ul className="d-flex techs">
                      {projects[0].tecnologies.map((project) => {
                        return <li key={project}>{project}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="carousel-item">
              <h1>NAME</h1>
            </div>

            <div className="carousel-item">
              <h1>IS</h1>
            </div> */}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <ul className="projects d-flex align-items-center justify-content-center">
          {projects.map((project) => {
            return (
              
              <li className="project d-flex justify-content-between list-unstyled">
                <div className=" visual">
                  <NavLink to={project.link} target="_blank">
                    <img src={project.image} alt="logo" className="img-fluid" />
                  </NavLink>
                </div>

                <div className="description d-flex flex-column justify-content-between p-2">
                  <h2>{project.name}</h2>

                  <div>
                    <h5>Description</h5>
                    <p>{project.description}</p>
                  </div>

                  <div>
                    <h5>Role</h5>
                    <p>{project.role}</p>
                  </div>

                  <div className="techs">
                    <h5>Tecnologies</h5>
                    <ul className="d-flex ">
                      {
                        project.tecnologies.map((tech) => {
                          return <li key={tech}>{tech}</li>;
                        })
                      }
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul> */
}
