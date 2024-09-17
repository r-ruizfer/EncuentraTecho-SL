import Icon from "../components/Icon.jsx"
import GithubIcon from "../assets/lupa.webp"
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className="nav-container">
      <img style={{width: "100px"}}src={Logo} alt="Logo" />
      <h3>Pisos</h3>
      <h3>Casas</h3>
      <h3>Contacto</h3>
      <div className="search">
        <Icon src={GithubIcon} alt={"Lupa"}/>
        <input type="text" placeholder="Buscar"></input>
      </div>
    </div>
  )
}

export default Navbar