import Carousel from '../components/Carousel'
import pareja from '../assets/pareja.png'

function DashboardPage({ rentals }) {
  const title = () => {
    const texto = 'Bienvenidos a Encuentra Techo'

    return (
      <h1 style={{ fontSize: '50px' }}>
        {texto.split('').map((letra, index) => (
          <span key={index} className="letter">
            {letra === ' ' ? '\u00A0' : letra}{' '}
            {/* Usa un espacio no rompible */}
          </span>
        ))}
      </h1>
    )
  }
  return (
    <div className="home-container">
      {title()}
      <p
        style={{
          width: '60%',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        ¿Cansado de buscar la casa perfecta y sentir que te estás volviendo
        loco? ¡No te preocupes! En Encuentra Techo con Casa Locas tenemos la
        solución para ti. Somos la inmobiliaria que no solo te ayuda a encontrar
        tu hogar, ¡sino que también te arranca una sonrisa!
      </p>
      <div className="container-sugerencias">
        <div className="ofrecemos">
          <h2>¿Qué ofrecemos?</h2>
          <ul>
            <li>
              <strong>Casas para todos los públicos:</strong> Desde el que
              quiere un castillo en la cima de una montaña, hasta el que se
              conforma con una casa en un árbol (¿quién dice que los adultos no
              pueden vivir en las alturas?).
            </li>
            <li>
              <strong>Inmuebles raros y maravillosos:</strong> ¿Siempre quisiste
              vivir en una casa con forma de zapato? ¿O quizás en una cueva de
              piedras preciosas? ¡Aquí tenemos de todo! Nos encanta lo inusual,
              porque la normalidad es tan aburrida como una reunión de trabajo
              sin café.
            </li>
          </ul>
        </div>
        <Carousel rentals={rentals} />
        <div className="sugerencias">
          <img src={pareja} alt="" />
          <div className="dashboard-text">
            <h2>¡Sugerencias para disfrutar de tu experiencia!</h2>
            <ul>
              <li>
                <strong>Lleva un mapa:</strong> A veces, nuestras casas locas
                están en lugares inesperados. ¡No querrás perderte en la
                búsqueda del hogar de tus sueños!
              </li>
              <li>
                <strong>Pregunta por las historias:</strong> Cada casa tiene su
                propia historia, y algunas son tan locas como sus diseños.
                ¡Pregúntanos y te sorprenderás!
              </li>
              <li>
                <strong>Prepara un snack:</strong> La búsqueda puede ser
                agotadora. Una buena galleta siempre ayuda mientras sueñas con
                tu nueva vida en una casa con piscina de gelatina (sí, lo
                tenemos).
              </li>
              <li>
                <strong>¡No te olvides de reír!</strong> Si no te ríes al menos
                una vez mientras buscas tu nuevo hogar, ¡te devolvemos tu
                locura!
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2>¡Únete a la locura de encontrar tu techo perfecto!</h2>
      <p style={{ fontSize: '20px', margin: '10px 20px' }}>
        En Encuentra Techo con Casa Locas, no solo buscamos casas, ¡buscamos
        momentos inolvidables y risas! Porque al final del día, lo más
        importante no es solo el lugar donde vives, sino cómo te sientes al
        vivir en él.
      </p>
    </div>
  )
}

export default DashboardPage
