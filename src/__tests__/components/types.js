import React from "react";
import { render } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonTypes from "../__fixtures__/types";
import Types from "../../components/Types";

describe("Type component", () => {
  test("Type component renders and displays two different types", () => {
    const context = {};
    context.pokemon = pokemonTypes;

    const { getByTestId } = render(
      <PokedexContext.Provider value={context}>
        <Types />
      </PokedexContext.Provider>
    );

    expect(getByTestId("type-0")).toHaveTextContent("electric");
    expect(getByTestId("type-1")).toHaveTextContent("water");
  });
});
