import React from "react";
import casa from "../assets/pexels-photo-106399.jpeg";

function ItemCard(props) {
  const {
    id,
    rental: { name, accommodates, bathrooms, bedrooms, city, country, price },
    handleDelete,
  } = props;
  const rentalCardsStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    gap: "5px",
    border: "5px solid #4a4e69",
    borderRadius: "10px",
    width: "700px",
    backgroundColor: "#f2e9e4",
    color: "#22223b",
    marginBottom: "20px",
  };

  return (
    <div style={rentalCardsStyle} key={id}>
      <img
        style={{
          border: "5px solid #4a4e69",
          borderRadius: "10px",
          width: "350px",
          height: "300px",
        }}
        src={casa}
        alt=" imagen rental"
      />
      <div>
        <h3>{name}</h3>
        <h3>
          {city} {country}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>accomodates: {accommodates}</p>
          <p>bathrooms: {bathrooms}</p>
          <p>bedrooms: {bedrooms}</p>
        </div>
        <p>Price : {price}.000 €</p>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
