import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import PokemonSelection from "../../components/PokemonSelection";

describe("Pokemon Selection testing", () => {
  test("Pokemon Selection displays with 10 random numbers", () => {
    const { getByTestId } = render(<PokemonSelection />);

    expect(getByTestId("pokemonSelection")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton0")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton1")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton2")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton3")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton4")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton5")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton6")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton7")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton8")).toBeInTheDocument();
    expect(getByTestId("pokemonSelectionButton9")).toBeInTheDocument();
  });

  test("Pokemon selection button calls setPokemonId onClick", () => {
    const setPokemonId = jest.fn();

    const { getByTestId } = render(
      <PokedexContext.Provider value={{ setPokemonId }}>
        <PokemonSelection />
      </PokedexContext.Provider>
    );

    fireEvent.click(getByTestId("pokemonSelectionButton5"));
    expect(setPokemonId).toHaveBeenCalledTimes(1);
  });
});
