import './index.css'
import { NavLink } from "react-router-dom"
import { IconButton } from "@mui/material"

import { LinkedIn, Twitter, Youtube, Instagram, GitHub, Facebook } from '../icons'

export const Footer=()=> {
  return (
    <div className='container-fluid footer'>

      <div className='socialmedia'>

        <ul className="d-flex">

          <li>
              <NavLink to='https://www.facebook.com/euclides.manuel.3386/' target='_blank'>
                <IconButton>
                  <Facebook className="icon"/>
                </IconButton>            
              </NavLink>
          </li>

          <li>
              <NavLink to='https://www.instagram.com/euclidesjoao.dev/' target='_blank'>
                <IconButton>
                  <Instagram className="icon"/>
                </IconButton>
              </NavLink>
          </li>

          <li>
              <NavLink>
                <IconButton>
                  <LinkedIn className="icon"/>
                </IconButton>
              </NavLink>
          </li>
          <li>
            <NavLink to='https://github.com/John-3-3' target='_blank'>
              <IconButton>
                <GitHub className="icon"/>
              </IconButton>
            </NavLink>
          </li>

          <li>
              <NavLink to='https://www.youtube.com/channel/UCXsHxZWa8eX3GAk-xqIviZw' target='_blank'>
                <IconButton>
                  <Youtube className="icon"/>
                </IconButton>
              </NavLink>
          </li>

          <li>
            <NavLink to='https://twitter.com/Mr_Euclides' target='_target'>
              <IconButton>
                <Twitter className="icon"/>
              </IconButton>
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  )
}
