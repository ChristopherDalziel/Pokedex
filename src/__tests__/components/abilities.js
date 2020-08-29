import React from "react";
import { render } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import Abilities from "../../components/Abilities";

describe("Stats component", () => {
  test("Checks ability name", () => {
    const context = {};

    context.pokemon = pokemonData[0];

    const { getByTestId } = render(
      <PokedexContext.Provider value={context}>
        <Abilities />
      </PokedexContext.Provider>
    );

    expect(getByTestId("abilities")).toHaveTextContent(
      pokemonData[0].abilities[0].ability.name
    );
  });
});
