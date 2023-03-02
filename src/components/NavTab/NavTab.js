import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css'

export const NavTab = () => {
  return (
    <nav className='navtab'>
      <NavLink className='navtab__link'>
        О проекте
      </NavLink>
      <NavLink className='navtab__link'>
        Технологии
      </NavLink>
      <NavLink className='navtab__link'>
        Студент
      </NavLink>
    </nav>
  )
}