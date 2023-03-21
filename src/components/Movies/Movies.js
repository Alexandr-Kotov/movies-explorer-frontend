import React from 'react';
import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { MoviesCardFilm } from '../../utils/constants';

export const Movies = () => {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList cards={MoviesCardFilm} savedFilm={false} />
      <button className='movies__button' type='button'>Ещё</button>
    </div>
  )
}