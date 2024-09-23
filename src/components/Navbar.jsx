import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'
import { useState } from 'react'
import Icon from './Icon.jsx'
import casa from '../assets/casaIcon.png'
import addcasa from '../assets/nuevo.png'

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-menu">
          <div
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: ' #fdfffc',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link to="/">
              <img
                style={{ width: '80%', height: 'auto', borderRadius: '50%' }}
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <Link
            style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            to="/add"
          >
            <Icon src={addcasa} atl={'casa'} />
            <h3 className="color-text">Añade tu casa</h3>
          </Link>

          <Link
            style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            to="/pagesRentals"
          >
            <Icon src={casa} atl={'casa'} />
            <h3 className="color-text">Casas</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
