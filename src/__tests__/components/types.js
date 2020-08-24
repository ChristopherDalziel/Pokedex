import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import pokemonTypes from "../__fixtures__/types";
import Types from "../../components/Types";

describe("Type testing", () => {
  test("Type component renders as expected", () => {
    const { state } = pokemonTypes;
    // console.log(state.types);

    console.log(state);

    // const { getByTestId } = render(
    //   <PokedexContext.Provider value={state}>
    //     <Types />
    //   </PokedexContext.Provider>
    // );
    screen.debug();
  });
});
