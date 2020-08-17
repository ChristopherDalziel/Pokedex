import React from "react";
import { render, screen } from "@testing-library/react";

import Pokedex from "../components/Pokedex";

describe("Pokèdex", () => {
  test("Renders Pokèdex component", () => {
    render(<Pokedex />);

    // Screen.debug displays component to the testing screen, allows you to ensure that it's visible.
    // screen.debug();
  });
});
