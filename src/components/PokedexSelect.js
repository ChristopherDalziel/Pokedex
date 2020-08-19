import React from "react";
import numbers from "../utils/numbers";
import SetButton from "./SetButton";

const PokedexSelect = () => {
  return (
    <div className="pokedex--select">
      {numbers.map((number, i) =>
        i < 5 ? (
          <button
            className="pokedex--select__button"
            onClick={() => setPokemonId(number)}
            key={i}
          >
            {number}
          </button>
        ) : (
          <button
            className="pokedex--select__button"
            onClick={() => setPokemonId(number)}
            key={i}
          >
            {number}
          </button>
        )
      )}
    </div>
  );
};

export default PokedexSelect;
