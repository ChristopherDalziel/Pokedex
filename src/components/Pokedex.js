import React, { useState, useEffect } from "react";
import axios from "axios";
import spinner from "../assets/pika-load.gif";
import pokeNumber from "../utils/pokeNumber";
import pokedex from "../assets/pokedex.png";

const Pokedex = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState("bulbasaur");
  const [shinyButton, setShinyButton] = useState(false);
  const [statsAbilities, setStatsAbilities] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [pokemonId]);

  const displayShinny = () => {
    if (shinyButton === false) {
      return data.sprites.front_default;
    } else {
      return data.sprites.front_shiny;
    }
  };

  return (
    <div className="pokedex" style={{ backgroundImage: `url(${pokedex})` }}>
      <button
        className="pokedex--shinyButton"
        onClick={() => setShinyButton(!shinyButton)}
      >
        S
      </button>
      <button
        className="pokedex--onButton"
        onClick={() => console.log("on click")}
      >
        On
      </button>
      <span>
        <button
          className="pokedex--negativeButton"
          onClick={() => {
            setPokemonId(data.id - 1);
          }}
        >
          -
        </button>
        <button
          className="pokedex--positiveButton"
          onClick={() => {
            setPokemonId(data.id + 1);
          }}
        >
          +
        </button>
      </span>
      <input
        className="pokedex--search"
        placeholder={data.name}
        name="pokemon"
        autoFocus
      ></input>
      {isLoading ? (
        <img className="pokedex--screen__load" src={spinner} alt="Loading..." />
      ) : (
        <>
          <div className="pokedex--screen">
            <img
              className="pokedex--screen__sprite"
              src={displayShinny()}
              alt={"pokemon spite"}
            />
            <p className="pokedex--screen__pokeNumber">{pokeNumber(data.id)}</p>
          </div>
          <div className="pokedex--data">
            {statsAbilities === true ? (
              <div className="pokedex--data__stats">
                <p>Health:</p>
                <p>Attack:</p>
                <p>Defense:</p>
                <p>Special Attack:</p>
                <p>Special Defense:</p>
                <p>Speed:</p>
              </div>
            ) : (
              <div className="pokedex--data__abilities">
                <p>Ability One:</p>
                <p>Ability Two:</p>
                <p>Ability Three:</p>
              </div>
            )}
          </div>
          <span>
            <button
              className="pokedex--data__stats__button"
              onClick={() => setStatsAbilities(true)}
            >
              Stats
            </button>
            <button
              className="pokedex--data__abilities__button"
              onClick={() => setStatsAbilities(false)}
            >
              Abilities
            </button>
          </span>
          <span className="pokedex--types">
            <div className="pokedex--types__one">type 1</div>
            <div className="pokedex--types__two">type 2</div>
          </span>
        </>
      )}
    </div>
  );
};

export default Pokedex;
