import { useState } from "react";

import React from "react";
import Home from "./Home";
import rentalsData from "../assets/rentals.json";
import casa from "../assets/pexels-photo-106399.jpeg";
import ItemCard from "./ItemCard";

function List() {
  const [rentals, setRentals] = useState(rentalsData.results);
  function handleDelete(index) {
    const clone = rentals.slice(0);
    clone.splice(index, 1);
    setRentals(clone);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {rentals.map((rental, i) => (
        <>
        {rental.price <= 60 ? (
          <ItemCard id={i} rental={rental} handleDelete={handleDelete} />
        ) : null}
        
        </>
        
      ))}
    </div>
  );
}

export default List;
