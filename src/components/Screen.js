import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";
import displayShiny from "../utils/displayShiny";
import pokeNumber from "../utils/pokeNumber";

const Screen = () => {
  const { pokemon, shinyDisplay } = useContext(PokedexContext);

  return (
    <div className="pokedex--screen" data-testid="screen">
      <img
        data-testid="screen-sprite"
        className="pokedex--screen__sprite"
        src={displayShiny(
          shinyDisplay,
          pokemon.sprites.front_default,
          pokemon.sprites.front_shiny
        )}
        alt={"pokemon spite"}
      />
      <p data-testid="pokemon-name" className="pokedex--screen__name">
        {pokemon.name}
      </p>
      <p className="pokedex--screen__pokeNumber">{pokeNumber(pokemon.id)}</p>
    </div>
  );
};

export default Screen;
