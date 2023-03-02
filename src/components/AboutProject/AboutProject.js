import React from 'react';
import './AboutProject.css';

export const AboutProject = () => {
  return (
    <div className='aboutproject'>
      <h2 className='aboutproject__title'>О проекте</h2>
      <div className='aboutproject__container'>
        <div className='aboutproject__table'>
          <h3 className='aboutproject__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutproject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutproject__table'>
          <h3 className='aboutproject__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutproject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutproject__graphic'>
        <div className='aboutproject__graphic-backend'>
          <h3 className='aboutproject__graphic-subtitle aboutproject__graphic-subtitle_backend'>1 неделя</h3>
          <p className='aboutproject__graphic-text'>Back-end</p>
        </div>
        <div className='aboutproject__graphic-frontend'>
          <h3 className='aboutproject__graphic-subtitle aboutproject__graphic-subtitle_frontend'>4 недели</h3>
          <p className='aboutproject__graphic-text'>Front-end</p>
        </div>
      </div>
    </div>
  )
}