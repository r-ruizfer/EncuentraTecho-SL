import TeamInfo from '../components/TeamInfo'

function AboutPage() {
  return (
    <div className="about">
      <p>
        Panel de administración para la plataforma de alquiler de apartamentos donde el administrador puede ver y gestionar los apartamentos mostrados en la plataforma.
      </p>
      <h2>Miembros del equipo</h2>
      <div className="team-member-card">
        <TeamInfo
          name={'Javier Gascón'}
          github={'https://github.com/Javitocatral'}
          linkedin={
            'https://www.linkedin.com/in/javiergasconruiz-frontend-developer/'
          }
        />
      </div>
      <div className="team-member-card">
        <TeamInfo
          name={'Enrique Páez'}
          github={'https://github.com/enriquepaez'}
          linkedin={'https://www.linkedin.com/in/enrique-paez/'}
        />
      </div>
      <div className="team-member-card">
        <TeamInfo
          name={'Ruben Ruiz'}
          github={'https://github.com/r-ruizfer'}
          linkedin={'https://www.linkedin.com/in/ruben-ruiz-5b451630b/'}
        />
      </div>
    </div>
  )
}

export default AboutPage
