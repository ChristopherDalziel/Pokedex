import { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const usePokedex = () => {
  const [state, setState, pokemonId, setPokemonId] = useContext(PokedexContext);

  function positiveId() {
    setPokemonId(pokemonId++);

    return positiveId;
  }
};

export default usePokedex;
