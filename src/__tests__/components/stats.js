import React from "react";
import { render } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import Stats from "../../components/Stats";
import pokemonData from "../__fixtures__/pokemon";

describe("Stats component", () => {
  test("Checks first stat name and base_stat displayed in Stats component", () => {
    const context = {};

    context.pokemon = pokemonData[0];

    const { getByTestId } = render(
      <PokedexContext.Provider value={context}>
        <Stats />
      </PokedexContext.Provider>
    );

    expect(getByTestId("stats")).toHaveTextContent(
      pokemonData[0].stats[0].stat.name
    );
    expect(getByTestId("stats")).toHaveTextContent(
      pokemonData[0].stats[0].base_stat
    );
  });
});
