import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import pokedex from "../assets/pokedex.png";

import Screen from "./Screen";
import AbilitiesStatsButtons from "./AbilitiesStatsButtons";
import Abilities from "./Abilities";
import Stats from "./Stats";
import Types from "./Types";
import PokemonSelection from "./PokemonSelection";
import PokemonForm from "./PokemonForm";
import Dpad from "./Dpad";
import ShinyButton from "./ShinyButton";
import LoadingDisplay from "./LoadingDisplay";
import Lights from "./Lights";
import PowerButton from "./PowerButton";

import errorHandling from "../utils/errorHandling";

const Pokedex = () => {
  const { error, loading, power, statsAbilities } = useContext(PokedexContext);

  return (
    <div
      alt="Pokedex"
      data-testid="Pokedex"
      className="pokedex"
      style={{ backgroundImage: `url(${pokedex})` }}
    >
      <PowerButton />
      {power ? (
        <>
          {loading ? (
            <LoadingDisplay />
          ) : (
            <>
              <Lights />
              <ShinyButton />
              <Dpad />
              <Screen />
              <AbilitiesStatsButtons />
              <div className="pokedex--data">
                {statsAbilities === "abilities" ? <Abilities /> : <Stats />}
              </div>
              <Types />
              <PokemonSelection />
              <PokemonForm />
            </>
          )}
        </>
      ) : (
        <div className="pokedex--screen__off" data-testid="screenOff" />
      )}
      {error ? (
        <div className="pokedex--screen__error">{errorHandling(error)}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pokedex;
