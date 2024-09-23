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
      <Routes>
        {}
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/"
          element={
            <>
              <Navbar  />
              <div className="principal" style={{ display: 'flex' }}>
                <DashboardPage rentals={rentals} />
                <Sidebar />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/add"
          element={
            <>
             <Navbar  />
              <div className="principal" style={{ display: 'flex' }}>
                <AddApartment setRentals={setRentals} />
                <Sidebar />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/pagesRentals/:rentalId"
          element={
            <>
             <Navbar />
              <div className="principal" style={{ display: 'flex' }}>
                <ItemDetailsPage rentals={rentals} />
                <Sidebar />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
             <Navbar  />
              <div className="principal" style={{ display: 'flex' }}>
                <AboutPage />
                <Sidebar />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/pagesRentals"
          element={
            <>
             <Navbar  />
              <div className="principal" style={{ display: 'flex' }}>
                <PageRentalList rentals={rentals} setRentals={setRentals} />
                <Sidebar />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/update/:rentalId"
          element={
            <>
             <Navbar />
              <div className="principal" style={{ display: 'flex' }}>
                <UpdateApartment rentals={rentals} setRentals={setRentals} />
                <Sidebar />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
