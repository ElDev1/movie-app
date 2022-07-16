import { Link } from 'react-router-dom'
import Search from './Search'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <Link className='navbar-brand' to='/'>MoviesApp</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false' aria-label='toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/list' className='nav-link'>List</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <Search />
            </div>
        </nav>
    </header>
  )
}

export default Header