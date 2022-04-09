import React from "react";
import { screen, render } from "@testing-library/react";
import { Criteria } from "./Criteria";

test("renders Criteria text", () => {
  render(<Criteria name="criteria" />);
  const name = screen.getByText(/criteria/i);
  expect(name).toBeInTheDocument();
});
