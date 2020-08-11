import React, { useState, useEffect } from "react";
import axios from "axios";
import spinner from "../assets/pika-load.gif";
import pokeNumber from "../utils/pokeNumber";

const Pokedex = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState(1);
  const [shinnyButton, setShinnyButton] = useState(false);

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
    if (shinnyButton === false) {
      return data.sprites.front_default;
    } else {
      return data.sprites.front_shiny;
    }
  };

  return (
    <div className="pokedex">
      <button
        className="pokedex--shinnyButton"
        onClick={() => setShinnyButton(!shinnyButton)}
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
            setPokemonId(pokemonId - 1);
          }}
        >
          -
        </button>
        <button
          className="pokedex--positiveButton"
          onClick={() => {
            setPokemonId(pokemonId + 1);
          }}
        >
          +
        </button>
      </span>
      <input className="pokedex--search" autoFocus></input>
      {isLoading ? (
        <img className="pokedex--screen__load" src={spinner} />
      ) : (
        <div className="pokedex--screen">
          {/* <div>{data.name}</div> */}
          <img
            className="pokedex--screen__sprite"
            src={displayShinny()}
            alt={"pokemon spite"}
          />
          <p className="pokedex--screen__pokeNumber">{pokeNumber(pokemonId)}</p>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
