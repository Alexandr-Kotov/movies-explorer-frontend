import React from 'react';
import './Register.css';
import { AuthForm } from '../AuthForm/AuthForm';

export const Register = () => {
  return (
    <AuthForm 
      title='Добро пожаловать!'
      buttonLabel='Зарегистрироваться'
      hint='Уже зарегистрированы?'
      link='Войти'
      feedback='/sign-in'
      input={
        <div className='register__container_input'>
          <label className='authform__label'>Имя</label>
          <input className='authform__input' type='text' name='name' required/>
        </div>
      }
    />
    
  )
}