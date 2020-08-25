import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import numbers from "../utils/numbers";

const PokemonSelection = () => {
  const { setPokemonId } = useContext(PokedexContext);

  return (
    <div className="pokedex--select" data-testid="pokemonSelection">
      {numbers.map((number, i) =>
        i < 5 ? (
          <button
            className="pokedex--select__button"
            onClick={() => setPokemonId(number)}
            key={i}
            data-testid={`pokemonSelectionButton${i}`}
          >
            {number}
          </button>
        ) : (
          <button
            className="pokedex--select__button"
            onClick={() => setPokemonId(number)}
            key={i}
            data-testid={`pokemonSelectionButton${i}`}
          >
            {number}
          </button>
        )
      )}
    </div>
  );
};

export default PokemonSelection;
