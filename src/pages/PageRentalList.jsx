import List from '../components/List'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

function PageRentalList({rentals, setRentals}) {
  
  const [ searchValue, setSearchValue ] = useState("")

  return (
    <div className='container-list'>
      <div className="search">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <List rentals={rentals} setRentals={setRentals} searchValue={searchValue} />
    </div>
  )
}

export default PageRentalList