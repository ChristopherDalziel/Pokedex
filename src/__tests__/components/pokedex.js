import React from "react";
import { render, screen } from "@testing-library/react";
import pokemonData from "../__fixtures__/pokemon";

import Pokedex from "../../components/Pokedex";

beforeEach(async () => {
  await render(<Pokedex />);
});

describe("Pokèdex", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    expect(screen.getByTestId("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  // test("Switches Pokèdex 'on'", () => {});

  // test("Renders Pokèdex with data", () => {
  //   const pokemon = {pokemonData};

  // });
});
