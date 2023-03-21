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

  const HeaderMovies = ({ movies, moviesSaved }) => ( 
    <>
      <div className='header__container header__container_black'>
        <div className='header__content header__content_black'>
        <Icons />
        <input className='header__burger' id='burger' type='checkbox' />
        <label className='header__burger_label' htmlFor='burger' />
          <div className='header__burger_container'>
            <label className='header__burger_label-cross' htmlFor='burger' />
            <div className='header__navigation_black'>
              <NavLink to='/' className='navigation-link__movies navigation-link__movies_mobile'>
                Главная
              </NavLink>
              <NavLink to='/movies' className={`navigation-link__movies ${movies ? 'navigation-link__movies_active' : ''}`}>
                Фильмы
              </NavLink>
              <NavLink to='/saved-movies' className={`navigation-link__movies ${moviesSaved ? 'navigation-link__movies_active' : ''}`}>
                Сохранённые фильмы
              </NavLink>
            </div>
            <div className='header__container_account'>
              <NavLink to='/profile' className='navigation-link_account'>
                Аккаунт
              </NavLink>
              <Link to='/profile' className='header__logo-link_account'>
                <img src={account} alt='Иконка аккаунта' className='header__logo_account' />
              </Link>
            </div>
          </div>  
        </div>
      </div>
    </>
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
        <Route path='/movies' element={<HeaderMovies moviesSaved={false} movies={true} />}></Route>
        <Route path='/saved-movies' element={<HeaderMovies moviesSaved={true} movies={false} />}></Route> 
        <Route path='/profile' element={<HeaderMovies />}></Route>
      </Routes>
    </header>
  )
}