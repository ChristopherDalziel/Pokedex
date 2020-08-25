import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import AbilitesStats from "../../components/AbilitiesStats";

describe("Abilites and Stats component", () => {
  test("Displays Pokemon data", () => {
    const { getByTestId } = render(<AbilitesStats />);
  });

  test("Displays Pokemon stats", () => {
    const { getByTestId } = render(<AbilitesStats />);
  });
});

// WILL SPLIT THIS COMPONENT UP
