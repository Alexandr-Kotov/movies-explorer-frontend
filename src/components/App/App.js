import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Movies } from '../Movies/Movies';
import { Erorr } from '../Erorr/Erorr';
import { Erorr404 } from '../../utils/constants';
import { Profile } from '../Profile/Profile';
import { ProfileAvatar } from '../../utils/constants';
import { SavedMovies } from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={ <Main /> }/>
          <Route path='/movies' element={ <Movies /> }/>
          <Route  path='/saved-movies' element={ <SavedMovies /> }/>
          <Route path='/profile' element={ <Profile profile={ProfileAvatar} /> } />
          <Route path='/sign-in' element={ <Login /> }/>
          <Route path='/sign-up' element={ <Register /> }/>
          <Route path='*' element={ <Erorr erorr={Erorr404} /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
