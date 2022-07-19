import Login from './components/Login'
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';
import Favourites from './components/Favourites';

import './CSS/App.css'
import './CSS/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom'


function App() {

  const favMovies = localStorage.getItem('favs')

  let tempMoviesInFavs

  if(favMovies === null) {
    tempMoviesInFavs = []
  } else {
    tempMoviesInFavs = JSON.parse(favMovies)
  }

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgUrl = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText

    const movieData = {
      imgUrl, title, overview,
      id: btn.dataset.movieId
    }

    const movieIsInArray = tempMoviesInFavs.find(movie => {
      return movie.id === movieData.id
    })
   

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
    } else {
      let moviesLeft = tempMoviesInFavs.filter(movie => {
        return movie.id !== movieData.id
      })
      tempMoviesInFavs = moviesLeft.map(item => item)
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
    }
   
  }

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/list' element={<List addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/results' element={<Results />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

