import Icon from '../components/Icon.jsx'
import GithubIcon from '../assets/lupa.webp'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img style={{ width: '100px' }} src={Logo} alt="Logo" />
      </Link>
      <Link to="/add">
        <h3>Añade tu casa</h3>
      </Link>
    
      <Link to="/pagesRentals">
      <h3>Casas</h3>
      </Link>
      <h3>Contacto</h3>
      <div className="search">
        <Icon src={GithubIcon} alt={'Lupa'} />
        <input
          style={{
            height: '30px',
            borderRadius: '10px',
            backgroundColor: '#f2e9e4',
          }}
          type="text"
          placeholder="Buscar"
        ></input>
      </div>
    </div>
  )
}

export default Navbar
