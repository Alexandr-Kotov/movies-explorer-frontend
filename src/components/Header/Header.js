import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo-link' to=''>
          <img className='header__logo' src={logo} alt='Логотип' />
        </Link>
        {/* <Routes>
          <Route path='/signin'element={<Link className='header__link' to='/signup'>Регистрация</Link>}/>
          <Route path='/signup' element={<Link className='header__link' to='/signin'>Войти</Link>}/>
        </Routes> */}
        <div>
        <Link className='header__link' to='/signup'>Регистрация</Link>
        <Link className='header__link' to='/signin'>Войти</Link>
        </div>
      </div>
    </header>
  )
}