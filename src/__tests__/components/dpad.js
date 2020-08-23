import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import Dpad from "../../components/Dpad";

describe("Dpad testing", () => {
  test("Dpad renders as expected", () => {
    render(<Dpad />);

    expect(screen.getByTestId("negativeButton")).toHaveTextContent("-");
    expect(screen.getByTestId("positiveButton")).toHaveTextContent("+");
  });

  test("Dpad calls setPokemonId when positive and negative clicks occur", () => {
    const setPokemonId = jest.fn();
    const { getByTestId } = render(
      <PokedexContext.Provider value={{ setPokemonId }}>
        <Dpad />
      </PokedexContext.Provider>
    );

    const positiveButton = getByTestId("positiveButton");
    fireEvent.click(positiveButton);

    const negativeButton = getByTestId("negativeButton");
    fireEvent.click(negativeButton);

    expect(setPokemonId).toHaveBeenCalledTimes(2);
  });
});
