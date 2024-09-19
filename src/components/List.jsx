import { useState } from 'react'
import React from 'react'

import casa from '../assets/pexels-photo-106399.jpeg'
import ItemCard from './ItemCard'
import { Link } from 'react-router-dom'

function List(props) {
  const { rentals } = props
  function handleDelete(index) {
    const clone = rentals.slice(0)
    clone.splice(index, 1)
    setRentals(clone)
  }
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
          {rental.price <= 60 ? (
            <Link to={`details/${rental.id}`}>
              <ItemCard id={i} rental={rental} handleDelete={handleDelete} />
            </Link>
          ) : null}
        </>
      ))}
    </div>
  )
}

export default List
