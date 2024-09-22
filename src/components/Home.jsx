import { useState } from "react";
import rentalsData from "../assets/rentals.json";
import Footer from "./Footer";
import List from "./List";

function Home() {
  const [rentals, setRentals] = useState(rentalsData.results);
 

  return (
    <div className="home-container">
      <h1>Encuentra Techo SL</h1>
      <List />
      <Footer />
    </div>
  );
}

export default Home;
