import { useState, useEffect } from 'react'
import Icon from './Icon'
import flechaDerecha from '../assets/flecha-derecha.png'
import flechaIzquierda from '../assets/flecha-izquierda.png'
function Carousel(props) {
  const { rentals } = props
  const [imageIndex, setImageIndex] = useState(0)

  // Esta función maneja el cambio automático a la siguiente imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === rentals.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [rentals.length])

  const handleLeft = () => {
    const nuevoIndex = imageIndex === 0 ? rentals.length - 1 : imageIndex - 1
    setImageIndex(nuevoIndex)
  }

  const handleRight = () => {
    const nuevoIndex = imageIndex === rentals.length - 1 ? 0 : imageIndex + 1
    setImageIndex(nuevoIndex)
  }

  return (
    <div className="container-carousel">
      <button onClick={handleLeft}>
        <Icon src={flechaIzquierda} />
      </button>
      <div className="box-carousel">
        <img
          className="image-carousel"
          key={rentals[imageIndex].id}
          src={rentals[imageIndex].picture_url.url}
          alt={`Imagen ${imageIndex}`}
        />
      </div>
      <button onClick={handleRight}>
        <Icon src={flechaDerecha} />
      </button>
    </div>
  )
}

export default Carousel
