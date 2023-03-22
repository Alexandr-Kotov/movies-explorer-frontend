import React from 'react';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList ({ cards, savedFilm }) {

  const li = () => {
    if (cards.length > 0) {
      return cards.map((card) => (
        <MoviesCard
          savedFilm={savedFilm}
          key={card.id}
          card={card}
        />
      ))
    }
  }

  return (
    <section className='movies-card'>
      <ul className='movies-card__list'>
        {li()}
      </ul>
    </section>
  )
}