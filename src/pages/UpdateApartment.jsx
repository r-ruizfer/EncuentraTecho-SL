import { useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'

function UpdateApartment({ rentals, setRentals }) {

  const { rentalId } = useParams()
  const navigate = useNavigate()
  const rentalToDisplay = rentals.find((rental) => rental.id === rentalId)
  const [apartment, setApartment] = useState(rentalToDisplay)

  const handleChange = (event) => {
    if (event.target.name == "picture_url") {
      setApartment({...apartment, picture_url: { ...apartment.picture_url, url: event.target.value }})
    } else {
      setApartment({ ...apartment, [event.target.name]: event.target.value })
    }
  }
    

  const handleUpdateApartment = (event) => {
    event.preventDefault()

    const updatedApartment = {
      ...apartment,
      picture_url: {
        ...apartment.picture_url,
        url: apartment.picture_url.url
      }
    }

    setApartment(updatedApartment)

    const updatedRentals = rentals.map((rental) =>
      rental.id === apartment.id ? updatedApartment : rental
    )
    
    setRentals(updatedRentals)
    navigate(`/pagesRentals/${updatedApartment.id}`)
  }

  return (
    
    <form onSubmit={handleUpdateApartment} className="formContainer">
        <button type="submit">Update apartment</button>
      

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
          
          <label>
            Picture
            <input
              onChange={handleChange}
              value= {apartment.picture_url.url}
              type="text"
              name="picture_url"
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
