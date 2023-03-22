import React from 'react';
import './Profile.css';

export const Profile = ({ profile }) => {
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {profile.name}!</h2>
      <div className='profile__container'>
        <div className='profile__container-name'>
          <p className='profile__text'>Имя</p>
          <p className='profile__text'>{profile.name}</p>
        </div>
        <div className='profile__container-mail'>
          <p className='profile__text'>E-mail</p>
          <p className='profile__text'>{profile.mail}</p>
        </div>
      </div>
      <p className='profile__editor'>Редактировать</p>
      <p className='profile__exit'>Выйти из аккаунта</p>
    </section>
  )
}