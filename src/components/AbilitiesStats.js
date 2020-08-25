import React, { useState, useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const AbilitiesStats = () => {
  const [statsAbilities, setStatsAbilities] = useState("stats");
  const { pokemon, error } = useContext(PokedexContext);

  return (
    <>
      {error ? (
        ""
      ) : (
        <>
          <div className="pokedex--data">
            {statsAbilities === "stats" ? (
              <div className="pokedex--data__stats">
                {pokemon.stats.map((stat, i) => (
                  <p key={i}>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                ))}
              </div>
            ) : (
              <div className="pokedex--data__abilities">
                <h1>Abilities:</h1>
                {pokemon.abilities.map((abilities, i) => (
                  <p key={i}>{abilities.ability.name}</p>
                ))}
              </div>
            )}
          </div>

          <span>
            <button
              className="pokedex--data__stats__button"
              onClick={() => setStatsAbilities("stats")}
            >
              Stats
            </button>
            <button
              className="pokedex--data__abilities__button"
              onClick={() => setStatsAbilities("abilities")}
            >
              Abilities
            </button>
          </span>
        </>
      )}
    </>
  );
};

export default AbilitiesStats;
