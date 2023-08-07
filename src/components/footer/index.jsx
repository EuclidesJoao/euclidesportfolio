import './index.css'
import { NavLink } from "react-router-dom"
import { Facebookicon } from "../facebookIcon"
import { Instagramicon } from "../instagram"
import { Linkedinicon } from "../linkedinIcon"
import { Twittericon } from "../twitterIcon"
import { Youtubeicon } from "../youtubeIcon"
import { IconButton } from "@mui/material"
import { GitHubicon } from '../gitHubIcon'

export const Footer=()=> {
  return (
    <div className='container-fluid footer'>

      <div className='socialmedia'>

        <ul className="d-flex">

          <li>
              <NavLink to='https://www.facebook.com/euclides.manuel.3386/' target='_blank'>
                <IconButton>
                  <Facebookicon className="icon"/>
                </IconButton>            
              </NavLink>
          </li>

          <li>
              <NavLink to='https://www.instagram.com/euclidesjoao.dev/' target='_blank'>
                <IconButton>
                  <Instagramicon className="icon"/>
                </IconButton>
              </NavLink>
          </li>

          <li>
              <NavLink>
                <IconButton>
                  <Linkedinicon className="icon"/>
                </IconButton>
              </NavLink>
          </li>
          <li>
            <NavLink to='https://github.com/John-3-3' target='_blank'>
              <IconButton>
                <GitHubicon className="icon"/>
              </IconButton>
            </NavLink>
          </li>

          <li>
              <NavLink to='https://www.youtube.com/channel/UCXsHxZWa8eX3GAk-xqIviZw' target='_blank'>
                <IconButton>
                  <Youtubeicon className="icon"/>
                </IconButton>
              </NavLink>
          </li>

          <li>
            <NavLink to='https://twitter.com/Mr_Euclides' target='_target'>
              <IconButton>
                <Twittericon className="icon"/>
              </IconButton>
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  )
}
