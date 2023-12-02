import './index.css'
import { NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export const Footer=()=> {

  return (
    <div className='container-fluid footer'>

      <div className='socialmedia'>

        <ul className="d-flex align-elements-center justify-content-center">

          <li>
            <NavLink to='https://www.facebook.com/euclides.manuel.3386/' target='_blank'>
              <FaFacebook className='icon'/>
            </NavLink>
          </li>

          <li>
            <NavLink to='https://www.instagram.com/euclidesjoao.dev/' target='_blank'>
              <FaInstagram className='icon'/>
            </NavLink>
          </li>

          <li>
              <NavLink>
                <FaLinkedin className='icon'/>
              </NavLink>
          </li>

          <li>
            <NavLink to='https://github.com/John-3-3' target='_blank'>
              <FaGithub className='icon'/>
            </NavLink>
          </li>

          <li>
            <NavLink to='https://www.youtube.com/channel/UCXsHxZWa8eX3GAk-xqIviZw' target='_blank'>
              <FaYoutube className='icon'/>
            </NavLink>
          </li>

          <li>
            <NavLink to='https://twitter.com/Mr_Euclides' target='_target'>
              <FaTwitter className='icon'/>
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  )
}
