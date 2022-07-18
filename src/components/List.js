import { Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import swAlert from '@sweetalert/with-react'

const List = ({ addOrRemoveFromFavs }) => {

  const token = sessionStorage.getItem('token')  

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=5807de57c2531ea67e559dc2a04a9231&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    axios.get(endPoint)
      .then((response) => {
        const apiData = response.data
        setMovieList(apiData.results)
      })
      .catch((err) => {
        swAlert(<h2>Error fetching data</h2>)
      })
  },[setMovieList])


  return (
    <>
      { !token && <Navigate replace to="/" /> }
      
      <div className='row'>
      {
        movieList.map((elem, idx) => {
          return (
              <div className='col-3' key={idx}>
                <div className="card my-4">
                  <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..." />
                  <button onClick={addOrRemoveFromFavs} data-movie-id={elem.id} className='favourite-btn'>
                  🖤
                  </button>
                  <div className="card-body">
                    <h5 className="card-title">{elem.title}</h5>
                    <p className="card-text">{elem.overview.substring(0,100)}...</p>
                    <Link to={`/detail?movieID=${elem.id}`} className="btn btn-primary">View detail</Link>
                  </div>
                </div>
              </div>
          )
        })
      }
      </div>
    </>
  )
}

export default List