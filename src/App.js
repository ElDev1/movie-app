import Login from './components/Login'
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

import './CSS/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/list' element={<List />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

