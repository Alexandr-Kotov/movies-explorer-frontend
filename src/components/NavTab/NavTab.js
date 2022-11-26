import { Link } from 'react-router-dom'
import './NavTab.css'

export const NavTab = () => {
  return (
    <section className='navtab'>
      <div className='navtab__container'>
        <Link className='navtab__link' to=''>О проекте</Link>
        <Link className='navtab__link' to=''>Технологии</Link>
        <Link className='navtab__link' to=''>Студент</Link>
      </div>
    </section>
  )
}