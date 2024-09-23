import React from "react";
import Icon from "../components/Icon.jsx";
import GithubIcon from "../assets/lupa.webp";

function SearchBar({
  rentals,
  setRentals,
  searchValue,
  setSearchValue,
}) {
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);

    const filterRentals = rentals.filter((eachRental) => {
      return eachRental.name.includes(event.target.value);
    });

    setRentals(filterRentals);
  };
  return (
    <div style={{ display: "flex" }}>
      <Icon src={GithubIcon} alt={"Lupa"} />
      <input
        onChange={handleSearchChange}
        value={searchValue}
        type="text"
        placeholder="Buscar"
      ></input>
    </div>
  );
}

export default SearchBar;
