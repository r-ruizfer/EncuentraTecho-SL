import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import casa from '../assets/casaIcon.png'
import addcasa from '../assets/nuevo.png'

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-menu">
          <div>
            <Link to="/">
              <img
                style={{ width: '170px', height: '170px' }}
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <Link className="navbar-links" to="/add">
            <Icon src={addcasa} atl={'casa'} />
            <h3 className="color-text">Añade tu casa</h3>
          </Link>

          <Link className="navbar-links" to="/pagesRentals">
            <Icon src={casa} atl={'casa'} />
            <h3 className="color-text">Casas</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
