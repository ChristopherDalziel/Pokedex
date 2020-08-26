import React, { useState, useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Abilities = () => {
  const { pokemon, error } = useContext(PokedexContext);

  return (
    <>
      {error ? (
        ""
      ) : (
        <>
          <div className="pokedex--data__abilities">
            <h1>Abilities:</h1>
            {pokemon.abilities.map((abilities, i) => (
              <p key={i}>{abilities.ability.name}</p>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Abilities;
