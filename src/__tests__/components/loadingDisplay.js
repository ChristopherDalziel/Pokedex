import React from "react";
import LoadingDisplay from "../../components/LoadingDisplay";
import { render } from "@testing-library/react";

describe("Loading display component", () => {
  test("Loading display renders with image", () => {
    const { getByTestId } = render(<LoadingDisplay />);

    expect(getByTestId("screenLoad")).toHaveAttribute("src", "pika-load.gif");
  });
});
