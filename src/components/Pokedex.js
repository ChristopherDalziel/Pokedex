import React, { useState, useContext } from "react";
import pokedex from "../assets/pokedex.png";
import Screen from "./Screen";
import AbilitiesTypes from "./AbilitiesStats";
import Types from "./Types";
import PokemonSelection from "./PokemonSelection";
import PokemonForm from "./PokemonForm";
import Dpad from "./Dpad";

import errorHandling from "../utils/errorHandling";
import { PokedexContext } from "../context/PokedexContext";
import spinner from "../assets/pika-load.gif";

const Pokedex = () => {
  const { error, loading, pokemonId, setPokemonId } = useContext(
    PokedexContext
  );
  const [power, setPower] = useState(false);
  const [shinyDisplay, setShinyDisplay] = useState(false);

  return (
    <div
      alt="Pokedex"
      data-testid="Pokedex"
      className="pokedex"
      style={{ backgroundImage: `url(${pokedex})` }}
    >
      <button className="pokedex--onButton" onClick={() => setPower(!power)}>
        {power ? "Off" : "On"}
      </button>

      {error ? (
        <div className="pokedex--screen__error">{errorHandling(error)}</div>
      ) : power ? (
        <>
          {loading ? (
            <img
              className="pokedex--screen__load"
              src={spinner}
              alt="Loading..."
            />
          ) : (
            <>
              <div className="pokedex--light" />
              <div className="pokedex--light__red" />
              <div className="pokedex--light__yellow" />
              <div className="pokedex--light__green" />
              <div className="pokedex--light__yellow_big" />

              <button
                className="pokedex--shinyButton"
                onClick={() => setShinyDisplay(!shinyDisplay)}
              >
                S
              </button>

              <Dpad />
              <Screen shiny={shinyDisplay} />
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
