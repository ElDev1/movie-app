import { Link, Navigate } from "react-router-dom"

const Favorites = (props) => {
    
    const token = sessionStorage.getItem('token')

  return (
    <>  
        { !token && <Navigate replace to="/" /> }
        <h2>Your favorites movies</h2>
        <div className='row'>
        { !props.favorites.length && <div className="col-12 text-danger">You don't have favorite movies</div>}
        {
            props.favorites.map((elem, idx) => {
            return (
                <div className='col-3' key={idx}>
                    <div className="card my-4">
                    <img src={elem.imgUrl} className="card-img-top" alt="..." />
                    <button onClick={props.addOrRemoveFromFavs} data-movie-id={elem.id} className='favourite-btn'>
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

export default Favorites