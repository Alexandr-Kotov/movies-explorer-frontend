import React from 'react';
import './Login.css';
import { AuthForm } from '../AuthForm/AuthForm';

export const Login = () => {
  return (
    <AuthForm 
      title='Рады видеть!'
      buttonLabel='Войти'
      hint='Ещё не зарегистрированы?'
      link='Регистрация'
      feedback='/sign-up'
      indent={false}
    />
  )
}