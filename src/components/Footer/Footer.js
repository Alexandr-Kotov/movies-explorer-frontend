import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  const Foot = () =>(
      <div className='footer__content'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__container'>
          <p className='footer__year'>&copy; 2023</p>
          <nav className='footer__links'>
            <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/Alexandr-Kotov' target='_blank' rel='noreferrer'>Github</a>
          </nav>
        </div>
      </div>
  )


  return (
    <footer className='footer'>
      <Routes>
        <Route path='/' element={<Foot />}></Route>
        <Route path='/movies' element={<Foot />}></Route>
        <Route path='/saved-movies' element={<Foot />}></Route>
      </Routes>
    </footer>
  )
}