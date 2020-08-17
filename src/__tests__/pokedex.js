import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Pokedex from "../components/Pokedex";

beforeEach(() => {
  render(<Pokedex />);
});

describe("Pokèdex", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    expect(screen.getByTestId("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  // test("Switches Pokèdex 'on'", () => {
  //   render;
  // });
});
