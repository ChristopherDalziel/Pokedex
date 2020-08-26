import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import Stats from "../../components/Stats";

describe("Stats component", () => {
  test("Displays a Pokemons stats", () => {
    const { getByTestId } = render(<Stats />);
  });
});
