import React, { useState, useEffect } from "react";
import axios from "axios";
import spinner from "../assets/pika-load.gif";
import pokeNumber from "../utils/pokeNumber";
import numbers from "../utils/numbers";
import pokedex from "../assets/pokedex.png";

const Pokedex = () => {
  const [on, setOn] = useState(false);
  const [data, setData] = useState({});
  let [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState(1); //807 max
  const [shinyButton, setShinyButton] = useState(false);
  const [statsAbilities, setStatsAbilities] = useState("stats");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          // pokemon not found
          setError("Response");
        } else if (err.request) {
          // api error
          setError("Request");
        } else {
          // everything else
          setError(true);
        }
      });
  }, [pokemonId]);

  const displayShinny = () => {
    if (shinyButton === false) {
      return data.sprites.front_default;
    } else {
      return data.sprites.front_shiny;
    }
  };

  const errorHandling = () => {
    if (error === "Response") {
      return <p>Pokemon not found, Please try again.</p>;
    }
    if ((error = "Request")) {
      return <p>Please reload the Pokèdex and try again.</p>;
    }
  };

  const onInputChange = (e) => {
    e.preventDefault();
    let newInputValue = e.target.value.toLowerCase().trim();
    setInputValue(newInputValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setInputValue("Invalid input");
    } else {
      setPokemonId(inputValue);
      e.target.reset();
    }
  };

  return (
    <div
      alt="Pokedex"
      data-testid="Pokedex"
      className="pokedex"
      style={{ backgroundImage: `url(${pokedex})` }}
    >
      <button className="pokedex--onButton" onClick={() => setOn(!on)}>
        {on ? "Off" : "On"}
      </button>
      {on ? (
        <>
          <button
            className="pokedex--shinyButton"
            onClick={() => setShinyButton(!shinyButton)}
          >
            S
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
          </form>
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
              <div className="pokedex--light__yellow_big " />
              <div className="pokedex--screen">
                <img
                  className="pokedex--screen__sprite"
                  src={displayShinny()}
                  alt={"pokemon spite"}
                />
                <p data-testid="pokemon-name" className="pokedex--screen__name">
                  {data.name}
                </p>
                <p className="pokedex--screen__pokeNumber">
                  {pokeNumber(data.id)}
                </p>
              </div>
              {error ? (
                <div className="pokedex--screen__error">{errorHandling()}</div>
              ) : (
                ""
              )}
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
              <div className="pokedex--select">
                {numbers.map((number, i) =>
                  i < 5 ? (
                    <button
                      className="pokedex--select__button"
                      onClick={() => setPokemonId(number)}
                      key={i}
                    >
                      {number}
                    </button>
                  ) : (
                    <button
                      className="pokedex--select__button"
                      onClick={() => setPokemonId(number)}
                      key={i}
                    >
                      {number}
                    </button>
                  )
                )}
              </div>

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
        </>
      ) : (
        <div className="pokedex--screen__off" />
      )}
    </div>
  );
};

export default Pokedex;
