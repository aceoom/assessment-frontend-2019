import React    from 'react'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Incidents</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/create">Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

    // <ul>
    //   <li>
    //     <Link to="/">
    //       Home
    //     </Link>
    //   </li>
    //   <li>
    //     <Link to='/create'>Create</Link>
    //   </li>
    // </ul>