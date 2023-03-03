import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css'

export const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <NavLink className='nav-tab__link'>
        О проекте
      </NavLink>
      <NavLink className='nav-tab__link'>
        Технологии
      </NavLink>
      <NavLink className='nav-tab__link'>
        Студент
      </NavLink>
    </nav>
  )
}