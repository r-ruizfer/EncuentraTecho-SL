import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard(props) {
  const {
    index,
    rentals,
    setRentals,
    id,
    rental: {
      name,
      accommodates,
      bathrooms,
      bedrooms,
      city,
      country,
      price,
      picture_url: { url },
    },
  } = props

  function handleDelete(index) {
    const clone = [...rentals]
    clone.splice(index, 1)
    setRentals(clone)
  }

  return (
    <div className="rental-cards">
      <Link style={{ textDecoration: 'none' }} to={`/pagesRentals/${id}`}>
        <div style={{ color: '#020100', display: 'flex', gap: '5px' }}>
          <img className="rental-card-image" src={url} alt=" imagen rental" />
          <div>
            <h3>{name}</h3>
            <h3>
              {city} {country}
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p>accomodates: {accommodates}</p>
              <p>bathrooms: {bathrooms}</p>
              <p>bedrooms: {bedrooms}</p>
            </div>
            <p>Price : {price}.000 €</p>
          </div>
        </div>
      </Link>
      <div>
        <button
          className="color-text-sidebar"
          onClick={() => {
            handleDelete(index)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ItemCard
