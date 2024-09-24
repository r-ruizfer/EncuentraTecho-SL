import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  const [gifUrl, setGifUrl] = useState('')
  useEffect(() => {
    getGif()
  }, [])
  const getGif = async () => {
    try {
      const response = await fetch(
        'https://api.giphy.com/v1/gifs/random?api_key=7jXG3OdynDNQMn90crxYO7TQN6685YYW&tag=funny&rating=g'
      )
      const result = await response.json()

      const gifUrl = result.data.images.original.url
      console.log(gifUrl)
      setGifUrl(gifUrl)
    } catch (error) {
      console.error('Error fetching the GIF:', error)
    }
  }
  if (gifUrl === null) {
    return <h3>.... llegando gif</h3>
  }
  return (
    <div>
      <h2>Estas un poco perdido!!</h2>
      <div className="not-found">
        <img src={gifUrl} alt="" />
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
