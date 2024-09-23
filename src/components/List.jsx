import React from 'react'
import ItemCard from './ItemCard'

function List(props) {
  const { rentals, setRentals, searchValue } = props

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {rentals
      .filter(rental => rental.name.toLowerCase().includes(searchValue))
      .map((rental, i) => (
        <ItemCard
          key={i}
          index={i}
          rentals={rentals}
          rental={rental}
          setRentals={setRentals}
          id ={rental.id}
        />
      ))}
    </div>
  )
}

export default List
