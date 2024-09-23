
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'
import { useState } from 'react'

function Navbar() {

  return (
    <>
      <div className="nav-container">
        <div className="nav-menu">
          <div
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: ' #c9ada7',
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
       
      </div>
    </>
  )
}

export default Navbar
