import Icon from '../components/Icon.jsx'
import LinkedinIcon from '../assets/linkedin.png'
import FacebookIcon from '../assets/facebook.png'
import InstagramIcon from '../assets/instagram.png'
import GithubIcon from '../assets/github.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="social">
        <Icon src={LinkedinIcon} alt={'Linkedin'} />
        <Icon src={InstagramIcon} alt={'Instagram'} />
        <Icon src={FacebookIcon} alt={'Facebook'} />
        <Icon src={GithubIcon} alt={'Github'} />
      </div>

      <div className="contacto">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21521.290949865976!2d-6.10700820883922!3d36.694715972305694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc74a004f945b%3A0xc09fca0d24ab1453!2sM%C3%A1ximo%20Moto%20Jerez!5e0!3m2!1ses!2ses!4v1726587018225!5m2!1ses!2ses"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <ul style={{ color: '#fdfffc', fontSize: '' }}>
          <p>Dirección: Carretera del demonio Nº666 Madrid </p>
          <p>Teléfono: 652-625-321</p>
          <p>Email: encutratecho@gmai.com</p>
        </ul>
      </div>
    </div>
  )
}

export default Footer
