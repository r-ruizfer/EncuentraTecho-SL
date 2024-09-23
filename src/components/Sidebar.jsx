import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link to="/">
        <button
          className="color-text-sidebar"
          style={{
            backgroundColor: ' #e15c61',
            borderRadius: '15px',
            color: '#fdfffc',
            border: 'none',
            padding: '10px',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/about">
        <button
          className="color-text-sidebar"
          style={{
            backgroundColor: '#e15c61',
            borderRadius: '15px',
            color: '#fdfffc',
            border: 'none',
            padding: '10px',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          About
        </button>
      </Link>
    </div>
  )
}

export default Sidebar
