import rentals from '../assets/rentals.json'
import { useParams } from 'react-router-dom'
import casa from '../assets/pexels-photo-106399.jpeg'

function ItemDetailsPage() {
  const { rentalId } = useParams()

  const rentalToDisplay = rentals.results.find(
    (rental) => rental.id === rentalId
  )
  return (
    <div className="container-details">
      <div>
        <img style={{ width: '1000px', marginTop: '50px' }} src={casa} alt="" />
        <h1>{rentalToDisplay.price}.000€</h1>
        <h2>{rentalToDisplay.name}</h2>
      </div>
      <div style={{ display: 'flex', textAlign: 'left' }}>
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
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <p>{rentalToDisplay.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailsPage
