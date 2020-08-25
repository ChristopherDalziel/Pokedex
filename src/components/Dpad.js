import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Dpad = () => {
  const { pokemonId, setPokemonId, pokemon } = useContext(PokedexContext);

  return (
    <span>
      <button
        data-testid="negativeButton"
        className="pokedex--negativeButton"
        onClick={() => setPokemonId(pokemon.id - 1)}
      >
        -
      </button>
      <button
        data-testid="positiveButton"
        className="pokedex--positiveButton"
        onClick={() => setPokemonId(pokemon.id + 1)}
      >
        +
      </button>
    </span>
  );
};

export default Dpad;
