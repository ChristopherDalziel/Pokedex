import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const AbilitiesStatsButtons = () => {
  const { setStatsAbilities } = useContext(PokedexContext);

  return (
    <span>
      <button
        data-testid="statsButton"
        className="pokedex--data__stats__button"
        onClick={() => setStatsAbilities("stats")}
      >
        Stats
      </button>
      <button
        data-testid="abilitiesButton"
        className="pokedex--data__abilities__button"
        onClick={() => setStatsAbilities("abilities")}
      >
        Abilities
      </button>
    </span>
  );
};

export default AbilitiesStatsButtons;
