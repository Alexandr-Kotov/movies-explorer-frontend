import './AboutMe.css';
import aboutmephoto from '../../images/aboutme-photo.jpg';


export const AboutMe = () => {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__biography'>
          <h3 className='about-me__biography-title'>Александр</h3>
          <p className='about-me__biography-subtitle'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__biography-job'>Я родился и живу в городе Нижневартовске. Закончил Нижневартовский Нефтяной Техникум. Я люблю слушать музыку, а ещё люблю своих питомцев по кличке Ева собака и Марго кошка. Недавно начал кодить. Прошел курсы веб-разработки от Яндекс.Практикум в 2022 году.</p>
          <a className='about-me__biography-github' href='https://github.com/Alexandr-Kotov' target='_blank' rel='noreferrer'>Github</a>
        </div>
      <img className='about-me__image' src={aboutmephoto} alt='Фото Александра' />
      </div>
    </section>
  )
}