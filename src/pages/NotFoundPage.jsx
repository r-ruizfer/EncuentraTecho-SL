import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h2>Estas un poco perdido!!</h2>
      <div className="not-found">
        <img src="https://i.gifer.com/A1xE.gif" alt="" />
        <Link to="/">
          <button
            style={{
              backgroundColor: '#22223b',
              borderRadius: '15px',
              color: '#9a8c98',
              border: 'none',
              padding: '30px',
              fontSize: '35px',
              fontWeight: 'bold',
              margin: '20px',
              width: '300px',
            }}
          >
            Encuentra techo
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
