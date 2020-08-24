import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import pokemonTypes from "../__fixtures__/types";
import Types from "../../components/Types";

describe("Type testing", () => {
  test("Type component renders as expected", () => {
    const value = {};
    // const state = pokemonTypes;
    value.state = pokemonTypes;

    // returns all types
    // console.log(state.types);

    // returns type 1
    // console.log(state.types[0]);

    // returns type 2
    // console.log(state.types[1]);

    const { getByTestId } = render(
      // cannot read types of undefined error
      <PokedexContext.Provider value={value}>
        <Types />
      </PokedexContext.Provider>
    );

    screen.debug();
  });
});
