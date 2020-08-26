import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import Abilities from "../../components/Abilities";

describe("Abilities component", () => {
  test("Displays a Pokemons abilities", () => {
    const { getByTestId } = render(<Abilities />);
  });
});
