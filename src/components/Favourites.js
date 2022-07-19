import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Favourites = () => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs')
        
        if(favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal)
            setFavourites(favsArray)
        }
    },[])

  return (
    <>
        <h2>Your favourites movies</h2>
        <div className='row'>
        {
            favourites.map((elem, idx) => {
            return (
                <div className='col-3' key={idx}>
                    <div className="card my-4">
                    <img src={elem.imgUrl} className="card-img-top" alt="..." />
                    {/* <button onClick={addOrRemoveFromFavs} data-movie-id={elem.id} className='favourite-btn'>
                    🖤
                    </button> */}
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

export default Favourites