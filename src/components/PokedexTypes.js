import React from "react";

const PokedexTypes = ({ pokemon, loading }) => {
  return (
    <>
      {error ? (
        ""
      ) : loading ? (
        "loading"
      ) : (
        <span className="pokedex--types">
          {pokemon.types.map((types, i) => (
            <div className={`pokedex--types__${i}`} key={i}>
              {types.type.name}
            </div>
          ))}
        </span>
      )}
    </>
  );
};

export default PokedexTypes;
