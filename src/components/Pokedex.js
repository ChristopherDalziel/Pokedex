import React from "react";
import { fetchPokemon } from "../actions";

const Pokedex = () => {
  fetchPokemon();
  return <div className="pokedex"></div>;
};

export default Pokedex;
