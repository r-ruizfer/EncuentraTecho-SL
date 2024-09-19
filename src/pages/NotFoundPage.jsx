import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h2>Estas un poco perdido!!</h2>
      <img src="https://i.gifer.com/A1xE.gif" alt="" />
      <Link to="/">
        <button>Encuentra techo</button>
      </Link>
    </div>
  )
}

export default NotFoundPage
