import React from 'react';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList ({ cards }) {

  const section = () => {
    if (cards.length > 0) {
      return cards.map((card) => (
        <MoviesCard
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