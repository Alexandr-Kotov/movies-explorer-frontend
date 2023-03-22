import React from 'react';
import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { MoviesCardFilm } from '../../utils/constants';
// import { Preloader } from '../Preloader/Preloader';

export const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList cards={MoviesCardFilm} savedFilm={false} />
      <button className='movies__button' type='button'>Ещё</button>
    </section>
  )
}