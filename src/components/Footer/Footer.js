import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
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
    </footer>
  )
}