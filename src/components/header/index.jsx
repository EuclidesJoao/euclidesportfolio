import './index.css';
import '../../assets/styles/geral.css';
//import { MenuIcon } from '../menuIcon';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
//import { SettingIcon } from '../settingsIcon';


export default function Header() {

  const activePage = window.location.pathname;
  const navLink = document.querySelectorAll('ul li a').forEach(
    link=>{
      if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
      }
    }
  )


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
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li>
            <NavLink to='about' className='nav-link'>About</NavLink>
          </li>

          <li>
            <NavLink to='projects' className='nav-link'>Projects</NavLink>
          </li>

          <li>
            <NavLink to='contacts' className='nav-link'>Contacts</NavLink>
          </li>
        </ul>

      </div>

    </div>
  )
}
