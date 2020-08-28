import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Abilities = () => {
  const { pokemon, error } = useContext(PokedexContext);

  return (
    <>
      {error ? (
        ""
      ) : (
        <>
          <div className="pokedex--data__abilities" data-testid="abilities">
            <h1 className="pokedex--data__abilities__heading">Abilities:</h1>
            {pokemon.abilities.map((abilities, i) => (
              <p className="pokedex--data__ability" key={i}>
                {abilities.ability.name}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Abilities;
