import React from "react";
import { render } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import Screen from "../../components/Screen";

describe("Screen test", () => {
  test("Screen renders with data and sprite", () => {
    const context = {};

    context.pokemon = pokemonData[0];

    const { getByTestId } = render(
      <PokedexContext.Provider value={context}>
        <Screen />
      </PokedexContext.Provider>
    );

    expect(getByTestId("screen")).toHaveTextContent(pokemonData[0].name);
    expect(getByTestId("screen")).toHaveTextContent(pokemonData[0].id);
    expect(getByTestId("screen-sprite")).toHaveAttribute(
      "src",
      pokemonData[0].sprites.front_shiny
    );
  });
});
