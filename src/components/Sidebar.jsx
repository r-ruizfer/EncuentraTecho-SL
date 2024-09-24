import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link to="/">
        <button className="color-text-sidebar">Home</button>
      </Link>
      <Link to="/about">
        <button className="color-text-sidebar">About</button>
      </Link>
    </div>
  )
}

export default Sidebar
