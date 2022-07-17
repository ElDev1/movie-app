import { Navigate,  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Detail = () => {
  
  const token = sessionStorage.getItem('token') 
  
  const [movie, setMovie] = useState(null)

  const query = new URLSearchParams(window.location.search)
  const movieID = query.get('movieID')


  useEffect(() => {
      const endPoint = `https:api.themoviedb.org/3/movie/${movieID}?api_key=5807de57c2531ea67e559dc2a04a9231&language=en-US`
      
      axios.get(endPoint)
        .then((res) => {
          const apiData = res.data
          setMovie(apiData)
        })
        .catch(err => {
          console.log(err)
          alert('status code 404')
        })

    },[movieID])

  return (
    <>
      {!token && <Navigate to='/' />}
      {!movie && <p>Loading...</p>}
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <div className='row'>
            <div className='col-4'>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img-fluid' alt='movie poster'></img>
            </div>
            <div className='col-8'>
              <h5>Release Date: {movie.release_date}</h5>
              <h5>Overview</h5>
              <p>{movie.overview}</p>
              <h5>Rating: {movie.vote_average}</h5>
              <h5>Genre</h5>
              <ul>
                {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Detail