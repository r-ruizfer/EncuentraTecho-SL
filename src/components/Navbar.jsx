import Icon from '../components/Icon.jsx'
import GithubIcon from '../assets/lupa.webp'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-menu">
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: ' #c9ada7',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link to="/">
              <img style={{ width: '100px' }} src={Logo} alt="Logo" />
            </Link>
          </div>
          <Link to="/add">
            <h3>Añade tu casa</h3>
          </Link>

          <Link to="/pagesRentals">
            <h3>Casas</h3>
          </Link>
          <h3>Contacto</h3>
        </div>
        <div className="search">
          <Icon src={GithubIcon} alt={'Lupa'} />
          <input type="text" placeholder="Buscar"></input>
        </div>
      </div>
    </>
  )
}

export default Navbar
