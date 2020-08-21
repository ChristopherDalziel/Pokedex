import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokedex from "../Pokedex";
import DPad from "../DPad";
import SetButton from "../SetButton";

const Landing = () => {
  const [data, setData] = useState({});
  let [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let [pokemonId, setPokemonId] = useState(152); //807 max
  const [shinyDisplay, setShinyDisplay] = useState(false);
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

  return (
    <main className="container">
      <Pokedex
        pokemon={data}
        loading={loading}
        shiny={shinyDisplay}
        statsAbilities={statsAbilities}
        inputValue={inputValue}
        error={error}
      />
    </main>
  );
};

export default Landing;
