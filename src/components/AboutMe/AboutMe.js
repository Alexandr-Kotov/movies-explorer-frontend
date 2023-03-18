import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg'

export const AboutMe = () => {
  return (
    <div className='about-me' id='about-me'>
      <div className='about-me__content'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__container'>
          <div className='about-me__container_description'>
            <h3 className='about-me__subtitle'>Александр</h3>
            <p className='about-me__subline'>Веб-разработчик, 26 лет</p>
            <p className='about-me__text'>Я родился и живу в городе Нижневартовске. Закончил ННТ по специальности автоматизация технологических процессов и производств. Я люблю слушать музыку, а ещё люблю своих питомцев по кличке Ева собака и Марго кошка. Недавно начал кодить. Прошел курсы веб-разработки от Яндекс.Практикум в 2022 году.</p>
            <a className='about-me__link-github' href='https://github.com/Alexandr-Kotov' target='_blank' rel='noreferrer'>Github</a>
          </div>
          <div className='about-me__container_photo'>
            <img className='about-me__image' src={photo} alt='Фото студента' />
          </div>
        </div>
      </div>
    </div>
  )
}