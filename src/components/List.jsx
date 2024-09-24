import React from 'react'
import ItemCard from './ItemCard'
import { useState } from 'react'

function List(props) {
  const { rentals, setRentals, searchValue } = props

  const [sortOrder, setSortOrder] = useState(0)

  const handleSortMaxToMin = () => {
    setSortOrder(-1)
  }

  const handleSortMinToMax = () => {
    setSortOrder(1)
  }

  return (
    <>
      <div className="sort-btn-container">
        <button onClick={handleSortMaxToMin} className="sort-btn">
          Ordenar: Precio mayor
        </button>

        <button onClick={handleSortMinToMax} className="sort-btn">
          Ordenar: Precio menor
        </button>
      </div>
      <div className="list-wrap">
        {rentals
          .filter((rental) => rental.name.toLowerCase().includes(searchValue))
          .toSorted((a, b) => {
            if (sortOrder === 0) {
              return 0
            } else if (sortOrder === 1) {
              return a.price - b.price
            } else if (sortOrder === -1) {
              return b.price - a.price
            }
          })
          .map((rental, i) => (
            <ItemCard
              key={i}
              index={i}
              rentals={rentals}
              rental={rental}
              setRentals={setRentals}
              id={rental.id}
            />
          ))}
      </div>
    </>
  )
}

export default List
