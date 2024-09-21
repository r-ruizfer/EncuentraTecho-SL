import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import DashboardPage from './pages/DashboardPage.jsx'
import ItemDetailsPage from './pages/ItemDetailsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Footer from './components/Footer.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PageRentalList from './pages/PageRentalList.jsx'
import rentalsData from './assets/rentals.json'
import AddPage from './pages/AddApartment.jsx'
import AddApartment from './pages/AddApartment.jsx'
import UpdateApartment from './pages/UpdateApartment.jsx'

function App() {
  const [rentals, setRentals] = useState(rentalsData.results)

  return (
    <>
      <Navbar />
      <div className="principal" style={{ display: 'flex' }}>
        <Routes>
          <Route path="/" element={<DashboardPage rentals={rentals} />} />
          <Route
            path="/add"
            element={<AddApartment setRentals={setRentals} />}
          />
          <Route
            path="/pagesRentals/:rentalId"
            element={<ItemDetailsPage rentals={rentals} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/pagesRentals"
            element={
              <PageRentalList rentals={rentals} setRentals={setRentals} />
            }
          />
          <Route
            path="/update/:rentalId"
            element={
              <UpdateApartment rentals={rentals} setRentals={setRentals} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Sidebar />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
