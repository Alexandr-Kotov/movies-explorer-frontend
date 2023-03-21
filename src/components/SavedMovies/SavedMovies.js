import React from 'react';
import '../Movies/Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { MoviesCardFilmSave } from '../../utils/constants';

export const SavedMovies = () => {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList cards={MoviesCardFilmSave}  savedFilm={true} />
    </section>
  )
}