import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../../images/logo.png';
import account from '../../images/icon-account.svg'; 
import './Header.css';

export const Header = () => {

  const Icons = () => (
    <Link to='/' className='header__logo-link'>
      <img src={logo} alt='Логотип' className='header__logo' />
    </Link>
  )

  return (
    <header className='header'>
      
       
        <Routes>
          <Route path='/'  element={
            <div className='header__container header__container_blue'>
              <div className='header__content header__content_blue'>
              <Icons />
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
              </div>
            </div>
          }>
          </Route>
          <Route path='/movies' element={
            <>
            <div className='header__container header__container_black'>
              <div className='header__content header__content_black'>
              <Icons />
                <div className='header__navigation_black'>
                  <NavLink to='' className='navigation-link__movies'>
                    Фильмы
                  </NavLink>
                  <NavLink to='' className='navigation-link__movies'>
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <div className='header__container_account'>
                  <NavLink to='/sign-in' className='navigation-link_account'>
                    Аккаунт
                  </NavLink>
                  <Link to='/' className='header__logo-link_account'>
                    <img src={account} alt='Иконка аккаунта' className='header__logo_account' />
                  </Link>
                </div>
              </div>
            </div>
            </>
          }>
          </Route>
        </Routes>

      
    </header>
  )
}