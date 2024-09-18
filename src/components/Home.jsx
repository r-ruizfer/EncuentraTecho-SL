import { useState } from "react";
import rentalsData from "../assets/rentals.json";
import Footer from "./Footer";
import List from "./List";

function Home() {
  const [rentals, setRentals] = useState(rentalsData.results);
  const rentalCardsStyle = {
    border: "2px solid black",
    width: "700px",
    backgroundColor: "#f2e9e4",
    color: "#22223b",
  };
  function handleDelete(index){
    const clone = rentals.slice(0)
    clone.splice(index, 1)
    setRentals(clone)
  }
  return (
    <div className="home-container">
      <h1>Encuentra Techo SL</h1>
      <List />
      <Footer />
    </div>
  );
}

export default Home;
