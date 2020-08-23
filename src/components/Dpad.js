import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Dpad = () => {
  const { pokemonId, setPokemonId } = useContext(PokedexContext);
  return (
    <span>
      <button
        data-testid="negativeButton"
        className="pokedex--negativeButton"
        onClick={() => setPokemonId(pokemonId - 1)}
      >
        -
      </button>
      <button
        data-testid="positiveButton"
        className="pokedex--positiveButton"
        onClick={() => setPokemonId(pokemonId + 1)}
      >
        +
      </button>
    </span>
  );
};

export default Dpad;
