import './index.css';
import {skills} from '../../data/skills/index'
import { NavLink, Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='container'>
      <div className='d-flex flex-column align-items-center justify-content-center'>

        <h1 >About me</h1>

        <div className='row d-flex align-items-center'>
          
          <div className='col-md-6 col-12 content'> 
            <h2 className='mb-5'>Get to know me!</h2>

            <p>
              My full name is Euclides Manuel João, I am a full-stack developer.
              I have big passion for software development, algorithms and systems design, this 
              passion led me building the front-end of websites, web applications, backend API's
              that leads to the success of the overall product. <br/>
              Check out some of my works on project section 
              
              <br/><br/>
              When I'm not coding, I usually like to play chess, 
              practice martial arts, or hang out with my family or friends,

              I'm open to Job opportunities where I can contribute, learn and grow. 
              If you have a good opportunity that matches my skills and experience 
              then don't hesitate to contact me.
              
            </p>
          </div>

          <div className='col-md-6 col-12 skills'> 
            <h2 className='mb-5'>My skills</h2>

            <ul className='d-flex'>
              {
                skills.map((skill)=>{
                  return(
                     <li>{skill.name}</li>
                  )
                 
                })
              }
            </ul>
            
          </div>

        </div>
      </div>
    </div>
  )
}
