import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Types = () => {
  // destructuring pokemon from the PokedexContext
  const { pokemon } = useContext(PokedexContext);

  // Assigning the PokedexContext to the variable of dog
  // const dog = useContext(PokedexContext);

  // console.log(dog.state.types);

  return (
    <>
      <span className="pokedex--types">
        {pokemon.types.map((types, i) => (
          <div
            data-testid={`type-${i}`}
            className={`pokedex--types__${i}`}
            key={i}
          >
            {types.type.name}
          </div>
        ))}
      </span>
    </>
  );
};

export default Types;
