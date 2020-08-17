import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Pokedex from "../components/Pokedex";

describe("Pokèdex", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    render(<Pokedex />);

    expect(screen.getByTestId("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });
});
