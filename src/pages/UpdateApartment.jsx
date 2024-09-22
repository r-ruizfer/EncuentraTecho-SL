import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UpdateApartment({ rentals, setRentals }) {
  const { rentalId } = useParams()

  const rentalToDisplay = rentals.find((rental) => rental.id === rentalId)
  const [apartment, setApartment] = useState(rentalToDisplay)

  const handleChange = (event) =>
    setApartment({ ...apartment, [event.target.name]: event.target.value })

  const handleUpdateApartment = (event) => {
    event.preventDefault()

    const updatedApartment = {
      picture_url: { url: apartment.url },
      price: apartment.price,
      name: apartment.name,
      neighbourhood: apartment.neighbourhood,
      city: apartment.city,
      country: apartment.country,
      type: apartment.type,
      accommodates: apartment.accommodates,
      bathrooms: apartment.bathrooms,
      bedrooms: apartment.bedrooms,
      description: apartment.description,
    }

    setApartment(updatedApartment)

    const updatedRentals = rentals.map((rental) =>
      rental.id === apartment.id ? updatedApartment : rental
    )
    setRentals(updatedRentals)
  }

  return (
    <form onSubmit={handleUpdateApartment} className="formContainer">
      <Link to={`/pagesRentals/${rentalToDisplay.id}`}>
        <button type="submit">Update apartment</button>
      </Link>

      <div
        style={{ display: 'flex', backgroundColor: '#f2e9e4', height: '500px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Price
            <input
              onChange={handleChange}
              value={apartment.price}
              type="number"
              name="price"
            ></input>
          </label>

          <label>
            Name
            <input
              onChange={handleChange}
              value={apartment.name}
              type="text"
              name="name"
            ></input>
          </label>

          <label>
            Neighbourhood
            <input
              onChange={handleChange}
              value={apartment.neighbourhood}
              type="text"
              name="neighbourhood"
            ></input>
          </label>

          <label>
            City
            <input
              onChange={handleChange}
              value={apartment.city}
              type="text"
              name="city"
            ></input>
          </label>

          <label>
            Country
            <input
              onChange={handleChange}
              value={apartment.country}
              type="text"
              name="country"
            ></input>
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Type
            <input
              onChange={handleChange}
              value={apartment.type}
              type="text"
              name="type"
            ></input>
          </label>

          <label>
            Accommodates
            <input
              onChange={handleChange}
              value={apartment.accommodates}
              type="number"
              name="accommodates"
            ></input>
          </label>

          <label>
            Bathrooms
            <input
              onChange={handleChange}
              value={apartment.bathrooms}
              type="number"
              name="bathrooms"
            ></input>
          </label>

          <label>
            Bedrooms
            <input
              onChange={handleChange}
              value={apartment.bedrooms}
              type="number"
              name="bedrooms"
            ></input>
          </label>
        </div>
      </div>

      <label>
        Description
        <textarea
          onChange={handleChange}
          value={apartment.description}
          name="description"
        ></textarea>
      </label>
    </form>
  )
}

export default UpdateApartment
