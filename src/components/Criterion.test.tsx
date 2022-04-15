import React from "react";
import { screen, render } from "@testing-library/react";
import { Criterion } from "./Criterion";

test("renders Criterion text", () => {
  const crit = {
    name: "criteria",
    weight: 1,
    type: "custom",
  };
  render(<Criterion criterion={crit} />);
  const name = screen.getByText(/criteria/i);
  expect(name).toBeInTheDocument();
});
