import React from "react";
import { render } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import Screen from "../../components/Screen";

describe("Screen test", () => {
  // test("Screen renders off", () => {
  //   const context = {};

  //   context.pokemon = pokemonData[0];

  //   const { getByTestId } = render(
  //     <PokedexContext.Provider value={context}>
  //       <Screen />
  //     </PokedexContext.Provider>
  //   );

  //   expect(getByTestId("screenOff")).toBeInTheDocument();
  // });

  // test("Screen renders loading", () => {
  //   const context = {};

  //   context.loading = true;

  //   const { getByTestId } = render(
  //     <PokedexContext.Provider value={context}>
  //       <Screen />
  //     </PokedexContext.Provider>
  //   );
  // });

  test("Screen renders with data", () => {
    const context = {};

    context.pokemon = pokemonData[0];

    const { getByTestId } = render(
      <PokedexContext.Provider value={context}>
        <Screen />
      </PokedexContext.Provider>
    );

    expect(getByTestId("screen")).toHaveTextContent("zeraora");
    expect(getByTestId("screen")).toHaveTextContent("807");
  });
});
