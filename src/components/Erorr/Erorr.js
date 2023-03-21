import React from 'react';
import './Erorr.css'

export function Erorr ({ erorr }) {
  return (
    <section className='erorr'>
      <h2 className='erorr__status'>{erorr.status}</h2>
      <p className='erorr__text'>{erorr.text}</p>
      <a className='erorr__link' href='/' alt='Ссылка назад'>Назад</a>
    </section>
  )
}