import React from 'react';
import './Portfolio.css';
import arrow from '../../images/portfolio.svg'

export const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio__content'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://alexandr-kotov.github.io/how-to-learn/' target='_blank' rel='noreferrer'>
              <p className='portfolio__text'>Статичный сайт</p>
              <img className='portfolio__image' src={arrow} alt='Иконка стрелки'></img>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://alexandr-kotov.github.io/russian-travel/' target='_blank' rel='noreferrer'>
              <p className='portfolio__text'>Адаптивный сайт</p>
              <img className='portfolio__image' src={arrow} alt='Иконка стрелки'></img>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/Alexandr-Kotov/react-mesto-api-full' target='_blank' rel='noreferrer'>
              <p className='portfolio__text'>Одностраничное приложение</p>
              <img className='portfolio__image' src={arrow} alt='Иконка стрелки'></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}