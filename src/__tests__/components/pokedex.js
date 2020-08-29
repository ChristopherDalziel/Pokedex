import React from "react";
import { render, screen } from "@testing-library/react";
import Pokedex from "../../components/Pokedex";

beforeEach(() => {
  render(<Pokedex />);
});

describe("Pokèdex component", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    expect(screen.getByTestId("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });
});
