import React from 'react';
import './AuthForm.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const AuthForm = ({ title, buttonLabel, hint, link, input, feedback, text, indent }) => {
  return (
    <main className='authform'>
      <div className='authform__container'>
        <Link to='/' className='authform__logo-link'>
          <img src={logo} alt='Логотип' className='authform__logo' />
        </Link>
        <form className='authform__form'>
          <h1 className='authform__title'>{title}</h1>
          {input}
          <label className='authform__label'>E-mail</label>
          <input className='authform__input' type='email' name='email' required/>
          <label className='authform__label'>Пароль</label>
          <input className='authform__input authform__input_password' type='password' name='password' required />
          <p className={`authform__text ${indent ? 'authform__text_indent' : ''}`} >{text}</p>
          <button className="authform__submit-button" type="submit">
            {buttonLabel}
          </button>
          <p className='authform__hint'>
            {hint}
          <Link className='authform__hint-link' to={feedback}>
            {link}
          </Link>
          </p>
        </form>
      </div>
    </main>
  )
}