import React, { useState } from 'react';
import './index.css';
import '../../assets/styles/geral.css';
import { Menu } from '../icons/index';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(prevState => !prevState);

  return (
    <div className="header container-fluid p-3">
      <div className="d-flex justify-content-between">
        <div className="d-md-none">
          <IconButton onClick={handleMenuToggle} aria-expanded={isMenuOpen}>
            <Menu />
          </IconButton>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu d-md-none ${isMenuOpen ? 'show' : ''}`}>
          <li><NavLink to='/' className="nav-link" onClick={handleMenuToggle} >Home</NavLink></li>
          {['About', 'Projects', 'Contacts'].map((item) => (
            <li key={item}>
              <NavLink to={item.toLowerCase()} className="nav-link" onClick={handleMenuToggle} >{item}</NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Menu */}
        {/* <ul className="desktop-menu w-100 d-md-flex d-none align-items-center justify-content-md-center">
          <li><NavLink to='/' className="nav-link" onClick={handleMenuToggle} >Home</NavLink></li>
          {['About', 'Projects', 'Contacts'].map((item) => (
            <li key={item}>
              <NavLink to={item.toLowerCase()} className="nav-link">{item}</NavLink>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
