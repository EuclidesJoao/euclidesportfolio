import './index.css';
import '../../assets/styles/geral.css';
//import { MenuIcon } from '../menuIcon';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
//import { SettingIcon } from '../settingsIcon';


export default function Header() {

  return (
    <div className="container-fluid header p-3">
      
      <div className="d-flex justify-content-between">

        <div className='d-md-none '>
          {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
        </div>

        <ul className='w-100 d-md-flex d-none align-items-center justify-content-md-center menulist'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='about'>About</NavLink>
          </li>

          <li>
            <NavLink to='projects'>Projects</NavLink>
          </li>

          <li>
            <NavLink to='contacts'>Contacts</NavLink>
          </li>
        </ul>

      </div>

    </div>
  )
}
