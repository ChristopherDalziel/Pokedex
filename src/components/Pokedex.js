import React, { useState, useEffect } from "react";
import axios from "axios";
import spinner from "../assets/pika-load.gif";
import pokeNumber from "../utils/pokeNumber";
import getRandomNumber from "../utils/randomNumber";
import pokedex from "../assets/pokedex.png";

const Pokedex = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState(1); //807 max
  const [shinyButton, setShinyButton] = useState(false);
  const [statsAbilities, setStatsAbilities] = useState("stats");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        setData(result.data);
        setIsLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error.response);
    }
  }, [pokemonId]);

  const displayShinny = () => {
    if (shinyButton === false) {
      return data.sprites.front_default;
    } else {
      return data.sprites.front_shiny;
    }
  };

  const onInputChange = (e) => {
    e.preventDefault();
    let newInputValue = e.target.value;
    if (newInputValue === "") {
      return "invalid pokemon";
    } else {
      setInputValue(newInputValue);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPokemonId(inputValue);
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
      <form className="pokedex--form" onSubmit={onSubmit}>
        <input
          className="pokedex--form__search"
          placeholder={data.name}
          name="pokemon"
          onChange={onInputChange}
          autoFocus
        ></input>
        <input
          className="pokedex--form__button"
          type="submit"
          value="Go"
        ></input>
      </form>
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
            {statsAbilities === "stats" ? (
              <div className="pokedex--data__stats">
                {data.stats.map((stat, i) => (
                  <p key={i}>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                ))}
              </div>
            ) : (
              <div className="pokedex--data__abilities">
                <h1>Abilities:</h1>
                {data.abilities.map((abilities, i) => (
                  <p key={i}>{abilities.ability.name}</p>
                ))}
              </div>
            )}
          </div>
          <table className="pokedex--table">
            <tbody>
              <tr>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
              </tr>
              <tr>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
                <td className="pokedex--table__cell">{getRandomNumber()}</td>
              </tr>
            </tbody>
          </table>
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
          <span className="pokedex--types">
            {data.types.map((types, i) => (
              <div className={`pokedex--types__${i}`} key={i}>
                {types.type.name}
              </div>
            ))}
          </span>
        </>
      )}
    </div>
  );
};

export default Pokedex;
