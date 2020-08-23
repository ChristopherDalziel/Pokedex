import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import Types from "../../components/Types";

describe("Type testing", () => {
  test("Type component renders as expected", () => {
    const state = pokemonData;

    const { getByTestId } = render(
      <PokedexContext.Provider value={state}>
        <Types />
      </PokedexContext.Provider>
    );

    console.log(state);

    screen.debug();
  });
});
