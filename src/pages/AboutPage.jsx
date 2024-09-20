import TeamInfo from '../components/TeamInfo'

function AboutPage() {
  return (
    <div >
      <p>
        Admin dashboard for the apartment rental platform where the admin can
        see and manage the apartments shown on the platform.
      </p>
      <h2>Team Members</h2>
      <TeamInfo
        name={'Javier Gascón'}
        github={'https://github.com/Javitocatral'}
        linkedin={
          'https://www.linkedin.com/in/javiergasconruiz-frontend-developer/'
        }
      />
      <TeamInfo
        name={'Enrique Páez'}
        github={'https://github.com/enriquepaez'}
        linkedin={'https://www.linkedin.com/in/enrique-paez/'}
      />
      <TeamInfo
        name={'Ruben Ruiz'}
        github={'https://github.com/r-ruizfer'}
        linkedin={'https://www.linkedin.com/in/ruben-ruiz-5b451630b/'}
      />
    </div>
  )
}

export default AboutPage
