import '../assets/styles/header.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import usaFlag from '../assets/images/png/usa.png'
import ptFlag from '../assets/images/png/portugal.png'


export default function Header() {
  return (
    <div className="header">
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div>
            <IconButton className='iconButton'><MenuRoundedIcon className='icon'/></IconButton>    
          </div>

          <div>
            <IconButton className='iconButton'><DarkModeIcon className='icon'/></IconButton>

              {/* <IconButton className='iconButton'>
                <img className='image-fluid icon' src={ptFlag} alt='Portugues'/>
              </IconButton>
    
              <IconButton className='iconButton'>
                <img className='image-fluid icon' src={usaFlag} alt="usa"/>
              </IconButton> */
              }
         

          </div>      
        </div>        

      </div>
    </div>
  )
}
