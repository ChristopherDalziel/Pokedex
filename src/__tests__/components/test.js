import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import Pokedex from "../../components/Pokedex";
import pokemonData from "../__fixtures__/pokemon";

afterAll(cleanup);

it("fetches and displays data", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { pokemonData } });

  const { getByTestId } = render(<Pokedex />);
  expect(getByTestId("on-off")).toHaveTextContent("On");
  fireEvent.click(getByTestId("on-off"));

  const resolvedPokemon = await waitForElement(() => getByTestId("resolved"));

  expect(resolvedPokemon).toHaveTextContent("zeraora");
});
