import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import PokemonForm from "../../components/PokemonForm";

describe("Pokemon Form component", () => {
  test("It renders the form with an empty value", () => {
    const { getByTestId } = render(<PokemonForm />);

    expect(getByTestId("pokemonFormInput").value).toBe("");
  });

  test("It changes the form input value", () => {
    const setPokemonId = jest.fn();

    const { getByTestId } = render(
      <PokedexContext.Provider value={{ setPokemonId }}>
        <PokemonForm />
      </PokedexContext.Provider>
    );

    fireEvent.change(getByTestId("pokemonFormInput"), {
      target: { value: "Bulbasaur" },
    });
    expect(getByTestId("pokemonFormInput").value).toBe("Bulbasaur");
  });
});
