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

  const rentalCardsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    gap: '5px',
    border: '5px solid #235789',
    borderRadius: '10px',
    width: '700px',
    backgroundColor: ' #fdfffc',
    color: '#020100',
    marginBottom: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  }

  return (
    <div style={rentalCardsStyle}>
      <Link to={`/pagesRentals/${id}`}>
        <div style={{ color: '#020100', display: 'flex', gap: '5px' }}>
          <img
            style={{
              border: '5px solid #235789',
              borderRadius: '10px',
              width: '350px',
              height: '300px',
            }}
            src={url}
            alt=" imagen rental"
          />
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
          style={{
            backgroundColor: ' #e15c61',
            borderRadius: '15px',
            color: '#fdfffc',
            border: 'none',
            padding: '10px',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
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
