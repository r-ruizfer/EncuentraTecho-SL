import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ApartmentForm({ rentals, setRentals, isUpdate }) {
  const { rentalId } = useParams()
  const navigate = useNavigate()
  const rentalToDisplay = isUpdate
    ? rentals.find((rental) => rental.id === rentalId)
    : {
        picture_url: { url: '' },
        price: 0,
        name: '',
        neighbourhood: '',
        city: '',
        country: '',
        property_type: '',
        accommodates: 0,
        bathrooms: 0,
        bedrooms: 0,
        description: '',
      }
  const [apartment, setApartment] = useState(rentalToDisplay)

  const handleChange = (event) => {
    if (event.target.name == 'picture_url') {
      setApartment({
        ...apartment,
        picture_url: { ...apartment.picture_url, url: event.target.value },
      })
    } else {
      setApartment({ ...apartment, [event.target.name]: event.target.value })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isUpdate) {
      const updatedApartment = {
        ...apartment,
        picture_url: {
          ...apartment.picture_url,
          url: apartment.picture_url.url,
        },
      }

      setApartment(updatedApartment)
      console.log(updatedApartment.picture_url.url)

      const updatedRentals = rentals.map((rental) =>
        rental.id === apartment.id ? updatedApartment : rental
      )

      setRentals(updatedRentals)
      navigate(`/pagesRentals/${updatedApartment.id}`)
    } else {
      const newApartment = {
        ...apartment,
        picture_url: {
          ...apartment.picture_url,
          url: apartment.picture_url.url,
        },
        id: generateNewId(),
      }

      setRentals((current) => [newApartment, ...current])
      navigate(`/pagesRentals/${newApartment.id}`)
    }
  }

  const generateNewId = () => {
    let randomNumber = Math.floor(Math.random() * 99999999)
    return 'new' + randomNumber
  }
  console.log(apartment.description)
  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <button className="add-update-button" type="submit">
        {isUpdate ? 'Actualizar ' : 'Añadir '}apartmento
      </button>

      <div
        className="form"
        style={{ backgroundColor: ' #e0e8f1', height: '500px' }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <div className="form-part">
            <label>
              Precio:
              <input
                onChange={handleChange}
                value={apartment.price}
                type="number"
                name="price"
              ></input>
            </label>

            <label>
              Nombre: 
              <input
                onChange={handleChange}
                value={apartment.name}
                type="text"
                name="name"
              ></input>
            </label>

            <label>
              Barrio: 
              <input
                onChange={handleChange}
                value={apartment.neighbourhood}
                type="text"
                name="neighbourhood"
              ></input>
            </label>

            <label>
              Ciudad: 
              <input
                onChange={handleChange}
                value={apartment.city}
                type="text"
                name="city"
              ></input>
            </label>

            <label>
              País: 
              <input
                onChange={handleChange}
                value={apartment.country}
                type="text"
                name="country"
              ></input>
            </label>
          </div>

          <div
            className="form-part"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label>
              Tipo: 
              <input
                onChange={handleChange}
                value={apartment.property_type}
                type="text"
                name="property_type"
              ></input>
            </label>

            <label>
              Capacidad: 
              <input
                onChange={handleChange}
                value={apartment.accommodates}
                type="number"
                name="accommodates"
              ></input>
            </label>

            <label>
              Baños: 
              <input
                onChange={handleChange}
                value={apartment.bathrooms}
                type="number"
                name="bathrooms"
              ></input>
            </label>

            <label>
              Habitaciones: 
              <input
                onChange={handleChange}
                value={apartment.bedrooms}
                type="number"
                name="bedrooms"
              ></input>
            </label>

            <label>
              Imagen: 
              <input
                onChange={handleChange}
                value={apartment.picture_url.url}
                type="text"
                name="picture_url"
              ></input>
            </label>
          </div>
        </div>
        <div className="textarea">
          <label>Descripción:</label>
          <textarea
            rows="4"
            cols="50"
            placeholder="Describe tu casa "
            onChange={handleChange}
            value={apartment.description}
            name="description"
          ></textarea>
        </div>
      </div>
    </form>
  )
}

export default ApartmentForm
