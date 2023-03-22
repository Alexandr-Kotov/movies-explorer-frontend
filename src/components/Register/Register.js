import React from 'react';
import './Register.css';
import { AuthForm } from '../AuthForm/AuthForm';

export const Register = () => {
  return (
    <>
    <AuthForm 
      title='Добро пожаловать!'
      buttonLabel='Зарегистрироваться'
      hint='Уже зарегистрированы?'
      link='Войти'
      feedback='/sign-in'
      text='Что-то пошло не так...'
      indent={true}
      input={
        <div className='authform__container-input'>
          <label className='authform__label'>Имя</label>
          <input className='authform__input' type='text' name='name' required/>
        </div>
      }
    />
    </>
  )
}