import React from 'react';
import './SearchForm.css';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = () => {
  return (
    <div className='searchform'>
      <form className='searchform__form'>
        <input className='searchform__input_search' type='search' placeholder='Фильм' />
        <input className='searchform__input_submit' type='submit' value='Поиск' />
      </form>
      <FilterCheckbox />
    </div>
  )
}