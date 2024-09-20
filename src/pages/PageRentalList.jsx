import List from '../components/List'

function PageRentalList({rentals, setRentals}) {
  return (
    <div className='container-list'>
      <List rentals={rentals} setRentals={setRentals} />
    </div>
  )
}

export default PageRentalList