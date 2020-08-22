import React from "react";
import { PokedexProvider } from "../../context/PokedexContext";
import Pokedex from "../Pokedex";

const App = () => {
  return (
    <PokedexProvider>
      <main className="container">
        <Pokedex />
      </main>
    </PokedexProvider>
  );
};

export default App;
