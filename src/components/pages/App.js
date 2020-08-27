import React from "react";
import { PokedexProvider } from "../../context/PokedexContext";
import Pokedex from "../Pokedex";
import Tutorial from "../Tutorial";

const App = () => {
  return (
    <PokedexProvider>
      <main className="container">
        <Pokedex />
        <Tutorial />
      </main>
    </PokedexProvider>
  );
};

export default App;
