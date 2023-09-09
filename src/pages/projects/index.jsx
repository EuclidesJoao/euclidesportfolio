import './index.css'
import { projects } from "../../data/projects"

export default function Projects() {
  return (
    <div className='container projects'>

      <div className='d-flex flex-column align-items-center'>
        <h1 className='mb-4'>Projects</h1>

        <div className='row list'>
          {
            projects.map((project)=>{
              return(
                <div className="project col-md-3 col-12 mb-5">
                  <img src={project.image}/>
                </div>
              )
            })
          }
        </div>

      </div>
      
    </div>
  )
}
