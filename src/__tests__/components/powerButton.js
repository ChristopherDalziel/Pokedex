import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import PowerButton from "../../components/PowerButton";

describe("Power Button testing", () => {
  test("Power button renders as expected", () => {
    const { getByTestId } = render(<PowerButton />);

    expect(getByTestId("power")).toHaveTextContent("On");
  });

  test("When Power Button is clicked setPower is called", () => {
    const setPower = jest.fn();

    const { getByTestId } = render(
      <PokedexContext.Provider value={{ setPower }}>
        <PowerButton />
      </PokedexContext.Provider>
    );

    fireEvent.click(getByTestId("power"));
    expect(setPower).toHaveBeenCalledTimes(1);
  });
});
