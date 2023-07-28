import './index.css'
import { NavLink } from 'react-router-dom'

export default function sidebar() {
  return (
    <div className='sidebar'>
        <ul className='d-flex flex-column'>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink>Sobre</NavLink></li>
          <li><NavLink>Projetos</NavLink></li>
          <li><NavLink>Contactos</NavLink></li>
        </ul>
    </div>
  )
}
