import { useState } from 'react'

function AddApartment({ setRentals }) {
  const [apartment, setApartment] = useState({
    url: '',
    price: 0,
    name: '',
    neighbourhood: '',
    city: '',
    country: '',
    type: '',
    accommodates: 0,
    bathrooms: 0,
    bedrooms: 0,
    description: '',
  })

  const handleChange = (event) =>
    setApartment({ ...apartment, [event.target.name]: event.target.value })

  const handleAddApartment = (event) => {
    event.preventDefault()

    const newApartment = {
      id: generateNewId(),
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
    setRentals((current) => [newApartment, ...current])
  }

  const generateNewId = () => {
    let randomNumber = Math.floor(Math.random() * 99999999)
    return 'new' + randomNumber
  }

  return (
    <form onSubmit={handleAddApartment} className="formContainer">
      <button
        style={{
          backgroundColor: ' #c9ada7',
          borderRadius: '15px',
          color: '',
          border: 'none',
          padding: '10px',
          fontWeight: 'bold',
          margin: '20px',
          width: '300px',
          fontSize: '30px',
          border: '2px solid #22223b',
          cursor: 'pointer',
        }}
        type="submit"
      >
        Add apartment
      </button>

      <div
        className="form"
        style={{ backgroundColor: '#f2e9e4', height: '500px' }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <div className="form-part">
            <label>
              Price:{' '}
              <input
                onChange={handleChange}
                value={apartment.price}
                type="number"
                name="price"
              ></input>
            </label>

            <label>
              Name:{' '}
              <input
                onChange={handleChange}
                value={apartment.name}
                type="text"
                name="name"
              ></input>
            </label>

            <label>
              Neighbourhood:{' '}
              <input
                onChange={handleChange}
                value={apartment.neighbourhood}
                type="text"
                name="neighbourhood"
              ></input>
            </label>

            <label>
              City:{' '}
              <input
                onChange={handleChange}
                value={apartment.city}
                type="text"
                name="city"
              ></input>
            </label>

            <label>
              Country:{' '}
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
              Type:{' '}
              <input
                onChange={handleChange}
                value={apartment.type}
                type="text"
                name="type"
              ></input>
            </label>

            <label>
              Accommodates:{' '}
              <input
                onChange={handleChange}
                value={apartment.accommodates}
                type="number"
                name="accommodates"
              ></input>
            </label>

            <label>
              Bathrooms:{' '}
              <input
                onChange={handleChange}
                value={apartment.bathrooms}
                type="number"
                name="bathrooms"
              ></input>
            </label>

            <label>
              Bedrooms:{' '}
              <input
                onChange={handleChange}
                value={apartment.bedrooms}
                type="number"
                name="bedrooms"
              ></input>
            </label>
          </div>
        </div>
        <div className="textarea">
          <label>Description</label>
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

export default AddApartment
