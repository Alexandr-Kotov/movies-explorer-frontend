import React from 'react';
import './AboutProject.css';

export const AboutProject = () => {
  return (
    <div className='about-project' id='about-project'>
      <div className='about-project__content'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__container'>
          <div className='about-project__table'>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__table'>
            <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__graphic'>
          <div className='about-project__graphic-backend'>
            <h3 className='about-project__graphic-subtitle about-project__graphic-subtitle_backend'>1 неделя</h3>
            <p className='about-project__graphic-text'>Back-end</p>
          </div>
          <div className='about-project__graphic-frontend'>
            <h3 className='about-project__graphic-subtitle about-project__graphic-subtitle_frontend'>4 недели</h3>
            <p className='about-project__graphic-text'>Front-end</p>
          </div>
        </div>
      </div>
    </div>
  )
}