import React, { useState, useContext } from "react";
import pokedex from "../assets/pokedex.png";
import PokedexScreen from "./PokedexScreen";
import PokedexAbilitiesTypes from "./PokedexAbilitiesStats";
import PokedexTypes from "./PokedexTypes";
import errorHandling from "../utils/errorHandling";
import { PokedexContext } from "../context/PokedexContext";
import spinner from "../assets/pika-load.gif";
import PokedexForm from "./PokemonForm";
import PokedexSelect from "./PokedexSelect";

const Pokedex = () => {
  const [state, setState, error, loading, setPokemonId, pokemonId] = useContext(
    PokedexContext
  );

  const [power, setPower] = useState(false);
  const [shinyDisplay, setShinyDisplay] = useState(false);

  console.log(pokemonId);

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
            ""
          )}
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
          <span>
            <button
              className="pokedex--negativeButton"
              onClick={() => setPokemonId(pokemonId - 1)}
            >
              -
            </button>
            <button
              className="pokedex--positiveButton"
              // onClick={() => positiveButton()}
            >
              +
            </button>
          </span>
          <PokedexScreen shiny={shinyDisplay} />
          <PokedexAbilitiesTypes />
          <PokedexTypes />
          <PokedexSelect />
          <PokedexForm />
        </>
      ) : (
        <div className="pokedex--screen__off" />
      )}
    </div>
  );
};

export default Pokedex;
