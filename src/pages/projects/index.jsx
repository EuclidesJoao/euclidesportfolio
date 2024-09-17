import React from "react";
import { NavLink } from "react-router-dom";
import DeveloperCoding from '../../assets/images/undraw_coding_re_iv62.svg';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS first
import './index.css'; // Import your custom CSS after

export const Projects =()=> {
  return(
    <div className="container-fluid project d-flex flex-column justify-content-center">
      <div className="content">
        <img 
          src={DeveloperCoding} 
          alt="Developer coding" 
          className="img-fluid coding-image"
        />
        <h1>Exciting Projects Ahead</h1>
        <p className="lead">
          Thank you for visiting my projects page! I'm currently revamping this section to feature some of my latest and most exciting work. 
          Stay tuned for new updates and insights into my projects and development journey.
        </p>
      
        <NavLink 
          to="/" 
          className="btn btn-primary"
        >
          Return to Home
        </NavLink>
      </div>
  </div>
  )
};
