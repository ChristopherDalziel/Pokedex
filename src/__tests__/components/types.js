import React from "react";
import { render } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import Types from "../../components/Types";

describe("Type component", () => {
  test("Type component renders and displays two different types", () => {
    const context = {};
    context.pokemon = pokemonData[0];

    const { getByTestId } = render(
      <PokedexContext.Provider value={context}>
        <Types />
      </PokedexContext.Provider>
    );

    console.log(pokemonData[0].types[0].type.name);

    expect(getByTestId("type-0")).toHaveTextContent(
      pokemonData[0].types[0].type.name
    );
    expect(getByTestId("type-1")).toHaveTextContent(
      pokemonData[0].types[1].type.name
    );
  });
});
