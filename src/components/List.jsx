import React from 'react'
import ItemCard from './ItemCard'
import { Link } from 'react-router-dom'

function List(props) {
  const { rentals, setRentals } = props

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {rentals.map((rental, i) => (
        <>
          <Link to={`/pagesRentals/${rental.id}`}>
            <ItemCard index={i} rentals={rentals} rental={rental} setRentals={setRentals} />
          </Link>
        </>
      ))}
    </div>
  )
}

export default List
