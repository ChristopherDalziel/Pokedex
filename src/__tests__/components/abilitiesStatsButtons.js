import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import AbilitiesStatsButtons from "../../components/AbilitiesStatsButtons";

describe("Abilites and Stats component", () => {
  test("Displays Pokemon stats", () => {
    const setStatsAbilities = jest.fn();
    const { getByTestId } = render(
      <PokedexContext.Provider value={{ setStatsAbilities }}>
        <AbilitiesStatsButtons />
      </PokedexContext.Provider>
    );

    fireEvent.click(getByTestId("statsButton"));
    fireEvent.click(getByTestId("abilitiesButton"));

    expect(setStatsAbilities).toHaveBeenCalledTimes(2);
  });
});
