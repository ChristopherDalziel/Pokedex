import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexProvider, PokedexContext } from "../../context/PokedexContext";
import pokemonData from "../__fixtures__/pokemon";

import Pokedex from "../../components/Pokedex";
import PowerButton from "../../components/PowerButton";

describe("Pokèdex", () => {
  test("Renders Pokèdex component in it's 'off' state", () => {
    const { getByTestId, getByText } = render(<Pokedex />);

    expect(getByTestId("Pokedex")).toBeInTheDocument();
    expect(getByText("On")).toBeInTheDocument();
  });

  // test("Sets setPower to true and switches Pokèdex on", () => {
  //   const TestComponent = () => {
  //     const { power, setPower } = React.useContext(PokedexContext);

  //     return (
  //       <PowerButton />
  //       // <>
  //       //   <button data-testid="power" onClick={() => setPower(!power)}>
  //       //     {power ? "Off" : "On"}
  //       //   </button>
  //       // </PowerButton>
  //     );
  //   };

  //   const { getByTestId } = render(
  //     <PokedexContext.Prover>
  //       <PowerButton />
  //     </PokedexContext.Prover>
  //   );

  //   const button = getByTestId("power");
  //   fireEvent.click(button);

  //   // const { findByTestId } = render(<TestComponent />);
  //   // expect(findByTestId("power")).toBeInTheDocument();
  // });

  // test("Renders Pokèdex with data", () => {
  //   const pokemon = { pokemonData };
  // });
});
