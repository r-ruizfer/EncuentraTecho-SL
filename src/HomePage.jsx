import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import './HomePage.css'


function HomePage() {

  return (
    <>
      <Navbar />
      <div className='principal'>
        <Home />
        <Sidebar />
      </div>
      
    </>
  )
}

export default HomePage
