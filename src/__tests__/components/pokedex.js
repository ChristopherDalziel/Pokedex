import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import axios from "axios";

import pokemonData from "../fixtures/pokemon";
import Pokedex from "../../components/Pokedex";

beforeEach(async () => {
  await render(<Pokedex />);
  axios.get = jest.fn(() => Promise.resolve({ data: pokemonData }));
});

// afterEach(cleanup);

describe("Pokèdex", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    expect(screen.getByTestId("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  test("Renders pokedex with data", () => {
    // fireEvent.click(screen.getByText("On"));
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText(pokemonData.name)).toBeInTheDocument();
  });

  // test("Switches Pokèdex 'on'", () => {
  //   fireEvent.click(screen.getByText("On"));
  //   expect(screen.getByText("Off")).toBeInTheDocument();
  // });
});
