import React from 'react';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList ({ cards, savedFilm }) {

  const section = () => {
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
    <section className='movies-card-list'>
      {section()}
    </section>
  )
}