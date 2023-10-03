import './index.css'
import { projects } from "../../data/projects"
import { NavLink } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='container projects'>

      <div className='d-flex flex-column align-items-center'>

        <ul className='row list'>
          {
            projects.map((project)=>{
              return(
                <li className="project col-md-6 col-12 mb-5">
                  <NavLink className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-item-center justify-content-center'>
                      <img src={project.image} className='' alt=''/>
                    </div>

                    <div>
                      <h4>{project.name}</h4>
                    </div>
                  </NavLink>                
                </li>
              )
            })
          }
        </ul>

      </div>
      
    </div>
  )
}
