import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  )
}

export default Sidebar
