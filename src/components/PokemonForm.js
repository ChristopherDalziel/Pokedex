import React, { useContext, useState } from "react";
import { PokedexContext } from "../context/PokedexContext";

const PokemonForm = () => {
  const { setPokemonId } = useContext(PokedexContext);
  const [inputValue, setInputValue] = useState("");

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
    <form className="pokedex--form" onSubmit={onSubmit}>
      <input
        className="pokedex--form__search"
        placeholder="Search..."
        name="pokemon"
        onChange={onInputChange}
        autoFocus
      ></input>
      <input className="pokedex--form__button" type="submit" value="Go"></input>
    </form>
  );
};

export default PokemonForm;
