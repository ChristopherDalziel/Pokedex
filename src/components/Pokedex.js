import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import pokedex from "../assets/pokedex.png";

import Screen from "./Screen";
import AbilitiesTypes from "./AbilitiesStats";
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
  const { error, loading, power } = useContext(PokedexContext);

  return (
    <div
      alt="Pokedex"
      data-testid="Pokedex"
      className="pokedex"
      style={{ backgroundImage: `url(${pokedex})` }}
    >
      <PowerButton />
      {error ? (
        <div className="pokedex--screen__error">{errorHandling(error)}</div>
      ) : power ? (
        <>
          {loading ? (
            <LoadingDisplay />
          ) : (
            <>
              <Lights />
              <ShinyButton />
              <Dpad />
              <Screen />
              <AbilitiesTypes />
              <Types />
              <PokemonSelection />
              <PokemonForm />
            </>
          )}
        </>
      ) : (
        <div className="pokedex--screen__off" />
      )}
    </div>
  );
};

export default Pokedex;
