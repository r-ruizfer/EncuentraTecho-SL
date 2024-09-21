import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link to="/">
        <button
          style={{
            backgroundColor: ' #c9ada7',
            padding: '5px',
            borderRadius: '15px',
            color: '#22223b',
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
          style={{
            backgroundColor: ' #c9ada7',
            padding: '5px',
            borderRadius: '15px',
            color: '#22223b',
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
