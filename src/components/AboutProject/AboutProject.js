import './AboutProject.css'

export const AboutProject = () => {
  return (
    <section className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__table'>
          <div className='about-project__table-container'>
            <h3 className='about-project__table-heading'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__table-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__table-container'>
            <h3 className='about-project__table-heading'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__table-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__chart'>
          <div className='about-project__chart-heading_green'>1 неделя</div>
          <div className='about-project__chart-heading_black'>4 недели</div>
          <p className='about-project__chart-text'>Back-end</p>
          <p className='about-project__chart-text'>Front-end</p>
        </div>
      </div>
    </section>
  )
}