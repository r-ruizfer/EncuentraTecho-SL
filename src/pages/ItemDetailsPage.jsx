import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState, useRef } from 'react'
Modal.setAppElement('#root')
function ItemDetailsPage({ rentals }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { rentalId } = useParams()
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
  const subtitle = useRef(null)
  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {
    subtitle.current.style.color = '#f00'
  }
  function closeModal() {
    setIsOpen(false)
  }
  const rentalToDisplay = rentals.find((rental) => {
    return rental.id === rentalId
  })

  return (
    <div className="container-details">
      <div>
        <img
          style={{ width: '1000px', marginTop: '50px', borderRadius: '15px' }}
          src={rentalToDisplay.picture_url.url}
          alt=""
        />
        <h1>{rentalToDisplay.price}.000€</h1>
        <h2>{rentalToDisplay.name}</h2>
      </div>
      <div className="box-info">
        <div style={{ width: '50%' }}>
          <h3>{rentalToDisplay.neighbourhood}</h3>
          <h4>
            {rentalToDisplay.city}, {rentalToDisplay.country}
          </h4>
          <p>
            <strong>{rentalToDisplay.property_type}</strong>
          </p>
          <div>
            <p>Capacidad: {rentalToDisplay.accommodates}</p>
            <p>Baños: {rentalToDisplay.bathrooms}</p>
            <p>Habitaciones: {rentalToDisplay.bedrooms}</p>
            <button className="mas-info-button" onClick={openModal}>
              Más Info
            </button>
          </div>
        </div>
        <div className="description-box">
          <p>{rentalToDisplay.description}</p>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 style={{ color: '#235789' }} ref={subtitle}>
            {rentalToDisplay.name}
          </h1>
          <p style={{ color: '#020100', width: '50%' }}>
            Descripción de la zona: {rentalToDisplay.space}
          </p>
          <button
            style={{ width: '100px' }}
            className="color-text-sidebar"
            onClick={closeModal}
          >
            close
          </button>
        </Modal>
      </div>
      <Link to={`/update/${rentalToDisplay.id}`}>
        <button className="update-button">Actualizar</button>
      </Link>
    </div>
  )
}

export default ItemDetailsPage
