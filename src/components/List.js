import { Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {

  const token = localStorage.getItem('token')  

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=5807de57c2531ea67e559dc2a04a9231&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    axios.get(endPoint)
      .then((response) => {
        const apiData = response.data
        setMovieList(apiData.results)
      })
  },[setMovieList])

  console.log(movieList)

  return (
    <>
      { !token && <Navigate replace to="/" /> }
      <div className='row'>
        <div className='col-3'>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default List