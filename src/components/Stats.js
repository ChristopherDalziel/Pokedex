import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Stats = () => {
  const { pokemon, error } = useContext(PokedexContext);
  return (
    <>
      {error ? (
        ""
      ) : (
        <div className="pokedex--data__stats" data-testid="stats">
          {pokemon.stats.map((stat, i) => (
            <p key={i}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Stats;
