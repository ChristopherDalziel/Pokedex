import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";
import Dpad from "../../components/Dpad";

// Test failing

describe("Dpad testing", () => {
  test("Dpad renders as expected", () => {
    const { getByTestId } = render(<Dpad />);

    expect(getByTestId("negativeButton")).toHaveTextContent("-");
    expect(getByTestId("positiveButton")).toHaveTextContent("+");
  });

  test("Dpad calls setPokemonId when positive and negative clicks occur", () => {
    const context = {};
    context.pokemon = pokemonData[0];
    const setPokemonId = jest.fn();

    const { getByTestId } = render(
      <PokedexContext.Provider value={{ context, setPokemonId }}>
        <Dpad />
      </PokedexContext.Provider>
    );

    const positiveButton = getByTestId("positiveButton");
    fireEvent.click(positiveButton);

    const negativeButton = getByTestId("negativeButton");
    fireEvent.click(negativeButton);

    screen.debug();

    expect(setPokemonId).toHaveBeenCalledTimes(2);
  });
});
