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
          <Link style={{ textDecoration: 'none' }} to="/add">
            <h3
              style={{
                backgroundColor: ' #c9ada7',
                padding: '5px',
                borderRadius: '15px',
                color: '#22223b',
              }}
            >
              Añade tu casa
            </h3>
          </Link>

          <Link style={{ textDecoration: 'none' }} to="/pagesRentals">
            <h3
              style={{
                backgroundColor: ' #c9ada7',
                padding: '5px',
                borderRadius: '15px',
                color: '#22223b',
                textDecoration: 'none',
              }}
            >
              Casas
            </h3>
          </Link>
          <h3
            style={{
              backgroundColor: ' #c9ada7',
              padding: '5px',
              borderRadius: '15px',
              color: '#22223b',
            }}
          >
            Contacto
          </h3>
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
