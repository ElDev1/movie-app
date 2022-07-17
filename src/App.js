import Login from './components/Login'
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';

import './CSS/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/list' element={<List />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/results' element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

