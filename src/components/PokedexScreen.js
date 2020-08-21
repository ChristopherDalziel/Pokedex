import React from "react";
import displayShiny from "../utils/displayShiny";
import spinner from "../assets/pika-load.gif";
import pokeNumber from "../utils/pokeNumber";
import errorHandling from "../utils/errorHandling";

const PokedexScreen = ({ pokemon, loading, error, shiny }) => {
  return (
    <>
      {error ? (
        <div className="pokedex--screen__error">{errorHandling(error)}</div>
      ) : loading ? (
        <img className="pokedex--screen__load" src={spinner} alt="Loading..." />
      ) : (
        <div className="pokedex--screen">
          <img
            className="pokedex--screen__sprite"
            src={displayShiny(
              shiny,
              pokemon.sprites.front_default,
              pokemon.sprites.front_shiny
            )}
            alt={"pokemon spite"}
          />
          <p data-testid="pokemon-name" className="pokedex--screen__name">
            {pokemon.name}
          </p>
          <p className="pokedex--screen__pokeNumber">
            {pokeNumber(pokemon.id)}
          </p>
        </div>
      )}
    </>
  );
};

export default PokedexScreen;
