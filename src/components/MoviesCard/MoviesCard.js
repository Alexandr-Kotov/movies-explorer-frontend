import React from 'react';
import './MoviesCard.css';

export function MoviesCard ({ card, isLike, savedFilm }) {
  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={card.image} alt={card.name}/>
      <div className='movies-card__container'>
        <figcaption className='movies-card__title'>{card.name}</figcaption>
        <button className={`movies-card__button ${isLike ? 'movies-card__button_active' : ''} ${savedFilm ? 'movies-card__button_saved' : ''}`} type='button' />
      </div>
      <time className='movies-card__time'>{card.time}</time>
    </div>
  )
}