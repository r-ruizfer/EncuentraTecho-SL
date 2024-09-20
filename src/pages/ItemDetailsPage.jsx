import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


function ItemDetailsPage({rentals}) {
  const { rentalId } = useParams();
  
  const rentalToDisplay = rentals.find(
    (rental) => {
      return (rental.id === rentalId)
    }
  
  );
  
  return (
    <div className="container-details">
      <div>
        <img
          style={{ width: "1000px", marginTop: "50px" }}
          src={rentalToDisplay.picture_url.url}
          alt=""
        />
        <h1>{rentalToDisplay.price}.000€</h1>
        <h2>{rentalToDisplay.name}</h2>
      </div>
      <div style={{ display: "flex", textAlign: "left" }}>
        <div style={{ width: "50%" }}>
          <h3>{rentalToDisplay.neighbourhood}</h3>
          <h4>
            {rentalToDisplay.city}-{rentalToDisplay.country}
          </h4>
          <p>
            <strong>{rentalToDisplay.property_type}</strong>
          </p>
          <div>
            <p>Accommodates: {rentalToDisplay.accommodates}</p>
            <p>Bathrooms: {rentalToDisplay.bathrooms}</p>
            <p>Bedrooms: {rentalToDisplay.bedrooms}</p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <p>{rentalToDisplay.description}</p>
        </div>
      </div>
      <Link to={`/update/${rentalToDisplay.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
}

export default ItemDetailsPage;
