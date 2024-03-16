import './index.css';
import { skills } from '../../data/skills/index';
import { NavLink } from 'react-router-dom';

export default function About() {

  return (
    <div className='container'>

      <div className='d-flex flex-column align-items-center justify-content-center'>

        <div className='row d-flex justify-content-center align-items-center '>
          
          <div className='col-md-6 col-12 about'> 
            <h1 className='mb-5'>Get to know me!</h1>

            <div className='d-flex'>
              <p>
                My full name is Euclides Manuel João, I am a full-stack developer.
                I have big passion for software development, algorithms and systems design, this 
                passion led me building the front-end of websites, web applications, mobile application, backend API's
                that leads to the success of the overall product. <br/>
                Check out some of my works on <NavLink to='/projects'>projects</NavLink>   section  <br/><br/>
                
                When I'm not coding, I usually like to play chess, 
                practice martial arts, or hang out with friends.
                I'm open to Job opportunities where I can contribute, learn and grow. 
                If you have a good opportunity that matches my skills and experience 
                then don't hesitate to <NavLink to='/contacts'>contact me.</NavLink>
              </p>
            </div>

          </div>

          <div className='col-md-6 col-12 skills'> 
            <h1 className='mb-5'>My skills</h1>

            <ul className='d-flex'>
              {
                skills.map((skill)=>{
                  return(
                    <li className='tip px-3' key={skill.id}>
                      {skill.icon}
                      <span className='tiptext'>{skill.name}</span>
                    </li>
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
