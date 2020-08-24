import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const PowerButton = () => {
  const { power, setPower } = useContext(PokedexContext);
  return (
    <button
      className="pokedex--onButton"
      onClick={() => setPower(!power)}
      data-testid="power"
    >
      {power ? "Off" : "On"}
    </button>
  );
};

export default PowerButton;
