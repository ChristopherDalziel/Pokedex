import React, { useState, useEffect } from "react";
import pokedex from "../assets/pokedex.png";
import PowerButton from "./PowerButton";
import PokedexScreen from "./PokedexScreen";
import PokedexAbilitiesTypes from "./PokedexAbilitiesStats";
import PokedexTypes from "./PokedexTypes";
import SetButton from "./SetButton";
import errorHandling from "../utils/errorHandling";
import DPad from "./DPad";

const Pokedex = ({ ...props }) => {
  const [power, setPower] = useState(false);
  // const [pokemonId, setPokemonId] = useState(1); //807 max
  const [shinyDisplay, setShinyDisplay] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  // const onInputChange = (e) => {
  //   e.preventDefault();
  //   let newInputValue = e.target.value.toLowerCase().trim();
  //   setInputValue(newInputValue);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputValue === "") {
  //     setInputValue("Invalid input");
  //   } else {
  //     setPokemonId(inputValue);
  //     e.target.reset();
  //   }
  // };

  const { error, pokemon, loading } = props;
  console.log("poke", error);
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

      {power ? (
        <>
          <div className="pokedex--light" />
          <div className="pokedex--light__red" />
          <div className="pokedex--light__yellow" />
          <div className="pokedex--light__green" />
          <div className="pokedex--light__yellow_big " />

          <button
            className="pokedex--shinyButton"
            onClick={() => setShinyDisplay(!shinyDisplay)}
          >
            S
          </button>
          {/* <span>
            <button
              className="pokedex--negativeButton"
              onClick={() => {
                setPokemonId(pokemon.id - 1);
              }}
            >
              -
            </button>
            <button
              className="pokedex--positiveButton"
              onClick={() => {
                setPokemonId(pokemon.id + 1);
              }}
            >
              +
            </button>
          </span> */}
          <PokedexScreen
            shiny={shinyDisplay}
            pokemon={pokemon}
            loading={loading}
            error={error}
          />

          <PokedexAbilitiesTypes
            loading={loading}
            pokemon={pokemon}
            error={error}
          />

          <PokedexTypes pokemon={pokemon} loading={loading} error={error} />
        </>
      ) : (
        ""
      )}

      {/* <form className="pokedex--form" onSubmit={onSubmit}>
        <input
          className="pokedex--form__search"
          placeholder="Search..."
          name="pokemon"
          onChange={onInputChange}
          autoFocus
        ></input>
        <input
          className="pokedex--form__button"
          type="submit"
          value="Go"
        ></input>
      </form> */}
    </div>
  );
};

export default Pokedex;
