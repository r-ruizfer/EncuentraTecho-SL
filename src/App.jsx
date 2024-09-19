import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage.jsx'
import ItemDetailsPage from './pages/ItemDetailsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Footer from './components/Footer.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="principal">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/details/:rentalId" element={<ItemDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
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
