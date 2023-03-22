import React from 'react';
import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = () => {
  return (
    <div className='searchform'>
      <div className='searchform__container'>
        <form className='searchform__form'>
          <input className='searchform__input' type='search' placeholder='Фильм' required />
          <button className='searchform__submit' type='submit'>Поиск</button>
        </form>
      </div>
      <FilterCheckbox />
    </div>
  )
}