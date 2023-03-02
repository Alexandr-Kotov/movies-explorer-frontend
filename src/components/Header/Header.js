import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo-link'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>
      <nav className='header__navigation'>
        <NavLink to='/sign-up' className='navigation-link'>
          Регистрация
        </NavLink>
        <div className='navigation-link__container_green'>
          <NavLink to='/sign-in' className='navigation-link navigation-link_green'>
            Войти 
          </NavLink>
        </div>
      </nav>
    </header>
  )
}