import './index.css';
import '../../assets/styles/geral.css';
import { MenuIcon } from '../menuIcon';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { SettingIcon } from '../settingsIcon';

// import { PortugueseFlagIcon } from '../portugueseFlagIcon';
// import { EnglishFlagIcon } from '../englishFlagIcon';
// import CloseIcon from '@mui/icons-material/Close';
// import usaFlag from '../assets/images/png/usa.png'
// import ptFlag from '../assets/images/png/portugal.png'
// import { darkTheme, lightTheme } from '../../redux/features/themeSlice';
// import Sidebar from '../sidebar';
// import { DarkIcon } from '../darkIcon';

// import {openSidebar, closeSidebar} from '../../redux/features/sidebarSlice'
// import { useDispatch, useSelector } from 'react-redux';



export default function Header() {

  // const idiom = useSelector(state=>state.idiom.value);
  // const theme = useSelector(state=>state.theme.value);
  // const sidebar = useSelector(state=>state.sidebar.value);

  // const dispatch = useDispatch()

  return (
    <div className="container-fluid header">
      
      <div className="d-flex justify-content-between">
        <div>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>

        <ul className='d-md-flex d-none align-items-center menulist'>
          <li>
            <NavLink>Home</NavLink>
          </li>

          <li>
            <NavLink>About</NavLink>
          </li>

          <li>
            <NavLink>Projects</NavLink>
          </li>

          <li>
            <NavLink>Contacts</NavLink>
          </li>
        </ul>

        <div>
          <IconButton>
            <SettingIcon/>
          </IconButton>
        </div>
      </div>


      {/* <div className='container'>
        <div className='d-flex justify-content-between'>
          <div>
            {
              sidebar ? <IconButton className='iconButton' onClick={()=>dispatch(closeSidebar())}><CloseIcon className='icon'/></IconButton> : <IconButton className='iconButton' onClick={()=>dispatch(openSidebar())}><MenuRoundedIcon className='icon'/></IconButton>    
            }
          </div>

          <div>
            {
              theme === 'dark' ? <IconButton className='iconButton' onClick={()=>dispatch(lightTheme())}><LightModeIcon className='icon'/></IconButton> : <IconButton className='iconButton' onClick={()=>dispatch(darkTheme())}><DarkModeIcon className='icon'/></IconButton>
            }
            {
              idiom==='english' ? <IconButton className='iconButton'><img className='image-fluid icon' src={usaFlag} alt="usa"/></IconButton> : <IconButton className='iconButton'><img className='image-fluid icon' src={ptFlag} alt='Portugues'/></IconButton>
            }
          </div>      
        </div>  
            
        {
          sidebar ? <Sidebar/>  : " "
        }

      </div> */}

    </div>
  )
}
