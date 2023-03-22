import React from 'react';
import './MoviesCard.css';

export function MoviesCard ({ card, isLike, savedFilm }) {
  return (
    <li className='card'>
      <img className='card__image' src={card.image} alt={card.name}/>
      <div className='card__container'>
        <figcaption className='card__title'>{card.name}</figcaption>
        <button className={`card__button ${isLike ? 'card__button_active' : ''} ${savedFilm ? 'card__button_saved' : ''}`} type='button' />
      </div>
      <time className='card__time'>{card.time}</time>
    </li>
  )
}