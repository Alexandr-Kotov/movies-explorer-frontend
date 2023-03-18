import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Movies } from '../Movies/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ 
          <>
            <Main />
            <Footer />
          </>
       }/>
        <Route path='/movies' element={
          <>
          <Movies />
          <Footer />
          </>
        }/>
        <Route path='/sign-in' element={ <Login /> }/>
        <Route path='/sign-up' element={ <Register /> }/>
      </Routes>
    </div>
  );
}

export default App;
