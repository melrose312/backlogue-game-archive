import { Link } from 'react-router-dom'
import Backlog from '../assets/backlogue-logo.png'

function Nav() {
  return (
    <nav className="nav__container">
        <div className="row">
          <div className="nav__logo">
            <img src={ Backlog } className="nav__logo--image" alt="" />
            <h2 className="nav__logo--title">Backlogue</h2>
          </div>
          <div className="nav__links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#" className="nav__link">About</a></li>
              <li><a href="#" className="nav__link">Collections</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Nav