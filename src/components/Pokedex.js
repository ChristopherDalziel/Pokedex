import React, { useState, useEffect } from "react";
import pokedex from "../assets/pokedex.png";
import PowerButton from "./PowerButton";
import PokedexScreen from "./PokedexScreen";
import PokedexAbilitiesTypes from "../components/PokedexAbilitiesTypes";
import PokedexTypes from "./PokedexTypes";
import SetButton from "./SetButton";
import errorHandling from "../utils/errorHandling";

const Pokedex = ({ ...props }) => {
  const [power, setPower] = useState(false);
  // const [data, setData] = useState({});
  // let [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState(1); //807 max
  const [shinyDisplay, setShinyDisplay] = useState(false);
  // const [statsAbilities, setStatsAbilities] = useState("stats");
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

  return (
    <div
      alt="Pokedex"
      data-testid="Pokedex"
      className="pokedex"
      style={{ backgroundImage: `url(${pokedex})` }}
    >
      <PowerButton power={power} onClick={() => setPower(!power)} />
      {props.error ? (
        errorHandling(props.error)
      ) : (
        <>
          <button
            className="pokedex--shinyButton"
            onClick={() => setShinyDisplay(!shinyDisplay)}
          >
            S
          </button>
          <span>
            <button
              className="pokedex--negativeButton"
              onClick={() => {
                setPokemonId(props.pokemon.id - 1);
              }}
            >
              -
            </button>
            <button
              className="pokedex--positiveButton"
              onClick={() => {
                setPokemonId(props.pokemon.id + 1);
              }}
            >
              +
            </button>
          </span>
          <div className="pokedex--screen">
            <PokedexScreen
              shiny={shinyDisplay}
              pokemon={props.pokemon}
              loading={props.loading}
              error={props.error}
            />

            <PokedexAbilitiesTypes
              loading={props.loading}
              pokemon={props.pokemon}
            />

            <PokedexTypes pokemon={props.pokemon} loading={props.loading} />
          </div>
        </>
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
      <div className="pokedex--light" />
      <div className="pokedex--light__red" />
      <div className="pokedex--light__yellow" />
      <div className="pokedex--light__green" />
      <div className="pokedex--light__yellow_big " />

      {/* <div className="pokedex--screen__off" /> */}
    </div>
  );
};

export default Pokedex;
