import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Detail = () => {
  
  const token = sessionStorage.getItem('token') 
  
  const query = new URLSearchParams(window.location.search)
  const movieID = query.get('movieID')

  useEffect(() => {
      const endPoint = `https:api.themoviedb.org/3/movie/${movieID}?api_key=5807de57c2531ea67e559dc2a04a9231&language=en-US`
      
      axios.get(endPoint)
        .then((res) => {
          const apiData = res.data
          
        })
        .catch(err => {
          console.log(err)
        })

    },[movieID])

  return (
    <>
      {!token && <Navigate to='/' />}
      <h2>Movie details</h2>
      <div className='row'>
        <div className='col-4'>
          imagen
        </div>
        <div className='col-8'>
          <h5>Date</h5>
          <h5>Review</h5>
          <p>data about the movie</p>
          <h5>genre</h5>
          <ul>
            <li>action</li>
            <li>terror</li>
            <li>terror</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Detail