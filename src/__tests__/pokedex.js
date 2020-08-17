import React from "react";
import {
  render,
  fireEvent,
  screen,
  findByTestId,
  wait,
} from "@testing-library/react";

import Pokedex from "../components/Pokedex";

beforeEach(() => {
  render(<Pokedex />);
});

describe("Pokèdex", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    expect(screen.getByTestId("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  test("Switches Pokèdex 'on'", () => {
    fireEvent.click(screen.getByText("On"));
    expect(screen.getByText("Off")).toBeInTheDocument();
  });

  // test("Displays Pokèmon data on load", async () => {
  //   const pokemon = await wait(() => findByTestId("pokemon-name"));
  //   expect(pokemon), toEqual("bublasaur");
  // });
});
