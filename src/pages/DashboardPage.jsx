import { useState } from 'react'
import rentalsData from '../assets/rentals.json'
import List from '../components/List.jsx'

function DashboardPage() {
  const [rentals, setRentals] = useState(rentalsData.results)
  console.log(rentals)
  return (
    <div>
      <div className="home-container">
        <h1>Encuentra Techo SL</h1>
        <List rentals={rentals} />
      </div>
    </div>
  )
}

export default DashboardPage
