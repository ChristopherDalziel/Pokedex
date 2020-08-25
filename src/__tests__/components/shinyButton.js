import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";

import ShinyButton from "../../components/ShinyButton";

describe("Shiny button component", () => {
  test("Shiny Button is rendered as expected", () => {
    const { getByTestId } = render(<ShinyButton />);

    expect(getByTestId("shinyButton")).toHaveTextContent("S");
  });

  test("Set shiny display is called", () => {
    const shinyDisplay = false;
    const setShinyDisplay = jest.fn();

    const { getByTestId } = render(
      <PokedexContext.Provider value={{ shinyDisplay, setShinyDisplay }}>
        <ShinyButton />
      </PokedexContext.Provider>
    );

    fireEvent.click(getByTestId("shinyButton"));
    expect(setShinyDisplay).toHaveBeenCalledTimes(1);
  });
});
