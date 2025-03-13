import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("to test if components are loaded properly", () => {
  //Rendering
  render(<Contact />);

  //Querying
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("to test if components are loaded properly", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("to tests input boxes", () => {
  render(<Contact />);
  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox.length).toBe(2);
  //expect(inputBox.length).not.toBe(3);
});
