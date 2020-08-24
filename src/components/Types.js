import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Types = () => {
  const { state } = useContext(PokedexContext);
  // const dog = useContext(PokedexContext);

  // console.log(dog.state.types);

  // types returns an array
  // console.log(types);

  return (
    <>
      <span data-testid="types" className="pokedex--types">
        {state.types.map((types, i) => (
          <div className={`pokedex--types__${i}`} key={i}>
            {types.type.name}
          </div>
        ))}
      </span>
    </>
  );
};

export default Types;
