import React, { useState, useEffect } from "react";
import axios from "axios";

const PokedexContext = React.createContext([{}, () => {}]);

const PokedexProvider = (props) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let [pokemonId, setPokemonId] = useState(10); //807 max
  const [shinyDisplay, setShinyDisplay] = useState(false);
  const [power, setPower] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        setState(res.data, loading);
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
    <PokedexContext.Provider
      value={{
        state,
        setState,
        error,
        loading,
        setLoading,
        pokemonId,
        setPokemonId,
        shinyDisplay,
        setShinyDisplay,
        power,
        setPower,
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };
