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
              <NavLink>
                <IconButton>
                  <Facebookicon className="icon"/>
                </IconButton>            
              </NavLink>
          </li>

          <li>
              <NavLink>
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
            <NavLink>
              <IconButton>
                <GitHubicon className="icon"/>
              </IconButton>
            </NavLink>
          </li>

          <li>
              <NavLink>
                <IconButton>
                  <Youtubeicon className="icon"/>
                </IconButton>
              </NavLink>
          </li>

          <li>
            <NavLink>
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
