import React, { useEffect, useContext } from "react";
import axios from "axios";
import { PokedexProvider, PokedexContext } from "../../context/PokedexContext";
import Pokedex from "../Pokedex";

const App = () => {
  // const [
  //   state,
  //   setState,
  //   error,
  //   setError,
  //   loading,
  //   setLoading,
  //   pokemonId,
  //   setPokemonId,
  // ] = useContext(PokedexContext);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(false);
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  //     .then((res) => {
  //       setState(res.data, loading);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       if (err.response) {
  //         // pokemon not found
  //         setError("Response");
  //       } else if (err.request) {
  //         // api error
  //         setError("Request");
  //       } else {
  //         // everything else
  //         setError(true);
  //       }
  //     });
  // }, [pokemonId]);

  return (
    <PokedexProvider>
      <main className="container">
        <Pokedex />
      </main>
    </PokedexProvider>
  );
};

export default App;
