import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const ShinyButton = () => {
  const { shinyDisplay, setShinyDisplay } = useContext(PokedexContext);
  return (
    <button
      data-testid="shinyButton"
      className="pokedex--shinyButton"
      onClick={() => setShinyDisplay(!shinyDisplay)}
    >
      S
    </button>
  );
};

export default ShinyButton;
