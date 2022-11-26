/* eslint-disable jsx-a11y/anchor-is-valid */
import './Portfolio.css';
import arrow from '../../images/arrow.svg'

export const Portfolio = () =>{
  return(
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className="portfolio__item">
          <a className='portfolio__link' href='#' target='_blank' rel='noreferrer'>
            <p className="portfolio__text">Статичный сайт</p>
            <img alt="" className="portfolio__arrow" src={arrow} />
          </a>
        </li>
        <li className="portfolio__item">
          <a className='portfolio__link' href='#' target='_blank' rel='noreferrer'>
            <p className="portfolio__text">Адаптивный сайт</p>
            <img alt="" className="portfolio__arrow" src={arrow} />
          </a>
        </li>
        <li className="portfolio__item">
          <a className='portfolio__link' href='#' target='_blank' rel='noreferrer'>
            <p className="portfolio__text">Одностраничное приложение</p>
            <img alt="" className="portfolio__arrow" src={arrow} />
          </a>
        </li>
      </ul>
      </div>
    </section>
  )
}