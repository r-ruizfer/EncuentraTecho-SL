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
            {rentalToDisplay.city}-{rentalToDisplay.country}
          </h4>
          <p>
            <strong>{rentalToDisplay.property_type}</strong>
          </p>
          <div>
            <p>Accommodates: {rentalToDisplay.accommodates}</p>
            <p>Bathrooms: {rentalToDisplay.bathrooms}</p>
            <p>Bedrooms: {rentalToDisplay.bedrooms}</p>
            <button
              style={{
                backgroundColor: '#22223b',
                borderRadius: '15px',
                color: '#9a8c98',
                border: 'none',
                padding: '10px',
                fontSize: '15px',
                fontWeight: 'bold',
                margin: '20px',
                width: '100px',
              }}
              onClick={openModal}
            >
              Mas Info
            </button>
          </div>
        </div>
        <div className="description-box">
          <p>Descipcion:{rentalToDisplay.description}</p>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 ref={subtitle}>Casas</h1>
          <p style={{ color: ' #22223b' }}>
            Descipcion:{rentalToDisplay.description}
          </p>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
      <Link to={`/update/${rentalToDisplay.id}`}>
        <button
          style={{
            backgroundColor: ' #c9ada7',
            borderRadius: '15px',
            color: '#22223b',
            border: 'none',
            padding: '10px',
            fontWeight: 'bold',
            margin: '20px',
            width: '200px',
            fontSize: '30px',
          }}
        >
          Update
        </button>
      </Link>
    </div>
  )
}

export default ItemDetailsPage
