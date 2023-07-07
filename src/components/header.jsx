import '../assets/styles/header.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import usaFlag from '../assets/images/png/usa.png'
import ptFlag from '../assets/images/png/portugal.png'
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../redux/features/themeSlice';

import {openSidebar, closeSidebar} from '../redux/features/sidebarSlice'
import Sidebar from './sidebar';

export default function Header() {

  const idiom = useSelector(state=>state.idiom.value);
  const theme = useSelector(state=>state.theme.value);
  const sidebar = useSelector(state=>state.sidebar.value);
  console.log(sidebar);

  const dispatch = useDispatch()

  return (
    <div className="header">
      
      <div className='container'>
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

      </div>

    </div>
  )
}
