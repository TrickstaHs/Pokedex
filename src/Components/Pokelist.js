import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
// import SearchBar from "./SearchBar";
import "../App.css";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      //.then(pokes => console.log(pokes));
      .then(pokes => setPokemons(pokes.results));
  };

  // const searchChange = event => {
  //   setSearch(event.target.value);
  // };
  // console.log(search);

  // const filterPokemons = pokemons.filter(pokemon => {
  //   return pokemon.name.includes(search.toLowerCase());
  // });

  return (
    <div className="App">
      <div className="pokedex">
        <img
          src="http://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
          alt=""
          width="60px"
          height="60px"
        />
        <h2>POKEDEX</h2>
        {/* <SearchBar handleSearch={searchChange} /> */}
      </div>
      {pokemons.map((pokemon, i) => (
        <Pokecard id={i + 1} key={i} name={pokemon.name} />
      ))}
    </div>
  );
}

export default Pokelist;
