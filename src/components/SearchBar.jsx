import React from "react";
import Icon from "../components/Icon.jsx";
import GithubIcon from "../assets/lupa.webp";

function SearchBar({ searchValue, setSearchValue }) {

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <Icon src={GithubIcon} alt={"Lupa"} />
      <input style={{color:"#020100"}}
        onChange={handleSearchChange}
        value={searchValue}
        type="text"
        placeholder="Buscar"
      ></input>
    </div>
  );
}

export default SearchBar;
