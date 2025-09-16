// src/components/Projects/index.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { projects } from "../../data/projects";
import DeveloperCoding from "../../assets/images/undraw_coding_re_iv62.svg";
import "./index.css"; // Your custom CSS

export const Projects = () => {
  // State to track the current project index
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Navigation Handlers ---
  const goToPrevious = () => {
    const isFirstProject = currentIndex === 0;
    if (!isFirstProject) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    const isLastProject = currentIndex === projects.length - 1;
    if (!isLastProject) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // If there are no projects, display a fallback message
  if (!projects || projects.length === 0) {
    return (
      <div className="container-fluid project-fallback d-flex flex-column justify-content-center align-items-center">
        <img
          src={DeveloperCoding}
          alt="Developer coding"
          className="img-fluid fallback-image"
        />
        <h1>Exciting Projects Ahead</h1>
        <p className="lead text-center">
          Thank you for visiting! I'm currently revamping this section. Please
          check back soon.
        </p>
        <NavLink to="/" className="btn btn-primary">
          Return to Home
        </NavLink>
      </div>
    );
  }

  // Get the current project object from the array
  const currentProject = projects[currentIndex];

  return (
    <div className="container-fluid project-container d-flex flex-column justify-content-center align-items-center">
      {/* --- Project Card --- */}
      <div className="project-card">
        <div className="project-content">
          <h4 className="project-name">{currentProject.name}</h4>
          <h5 className="project-role">{currentProject.role}</h5>
          <p className="project-description">{currentProject.description}</p>

          {/* Technologies Section */}
          <h6>Technologies Used:</h6>
          <ul className="project-technologies">
            {currentProject.technologies.map((TechComponent, index) => (
              <li className="tip" key={TechComponent.id}>
                {TechComponent.icon}
                <span className="tiptext">{TechComponent.name}</span>
              </li>
            ))}
          </ul>

          {/* Link to Live Project */}
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-3"
          >
            View Project
          </a>
        </div>
        <div className="project-image-container">
          <img
            src={currentProject.image}
            alt={`${currentProject.name} screenshot`}
            className="project-image"
          />
        </div>
      </div>

      {/* --- Navigation Controls --- */}
      <div className="project-navigation">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="btn btn-secondary"
        >
          &larr; Previous
        </button>
        <span className="page-indicator">
          {currentIndex + 1} / {projects.length}
        </span>
        <button
          onClick={goToNext}
          disabled={currentIndex === projects.length - 1}
          className="btn btn-secondary"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
