import React from "react";
import Pokedex from "../Pokedex";

const Landing = () => {
  return (
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) =>
    //   console.log(response)
    // ),
    <main className="container">
      <Pokedex />
    </main>
  );
};

export default Landing;
