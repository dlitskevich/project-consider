import React from "react";
import { screen, render } from "@testing-library/react";
import { Criterion } from "./Criterion";

test("renders Criterion text", () => {
  render(<Criterion name="criteria" weight={1} />);
  const name = screen.getByText(/criteria/i);
  expect(name).toBeInTheDocument();
});
