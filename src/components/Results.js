import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swAlert from '@sweetalert/with-react'
import axios from 'axios'

const Results = () => {
    const query = new URLSearchParams(window.location.search)
    const keyword = query.get('keyword')

    const [movieResults, setMovieResults] = useState([])

    useEffect(() => {

      const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=5807de57c2531ea67e559dc2a04a9231&language=en-US&query=${keyword}`
      axios.get(endPoint) 
        .then(res => {
          const movieData = res.data.results

          console.log(movieResults)
        
          if(movieData.length === 0) {
            swAlert(<h4>{keyword} Not found</h4>)
          }

          setMovieResults(movieData)
        })
        .catch(err => {
          console.log(err)
        })
    },[keyword])

    

  return (
    <>
      <h1>{keyword}</h1>
      <h2>results for <em>{keyword}</em></h2>
      { movieResults.length === 0 && <h3>not found {keyword}</h3> }
      <div className='row'>
      {
        movieResults.map((elem, idx) => {
          return (
              <div className='col-3' key={idx}>
                <div className="card my-4">
                  <img src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..." />
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

export default Results