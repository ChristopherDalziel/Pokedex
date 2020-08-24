import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Types = () => {
  const { state } = useContext(PokedexContext);

  // types returns an array
  // console.log(state.types);

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