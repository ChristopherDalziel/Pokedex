import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import displayShiny from "../utils/displayShiny";
import pokeNumber from "../utils/pokeNumber";

const Screen = () => {
  const { state, shinyDisplay } = useContext(PokedexContext);

  return (
    <div className="pokedex--screen">
      <img
        className="pokedex--screen__sprite"
        src={displayShiny(
          shinyDisplay,
          state.sprites.front_default,
          state.sprites.front_shiny
        )}
        alt={"pokemon spite"}
      />
      <p data-testid="pokemon-name" className="pokedex--screen__name">
        {state.name}
      </p>
      <p className="pokedex--screen__pokeNumber">{pokeNumber(state.id)}</p>
    </div>
  );
};

export default Screen;
