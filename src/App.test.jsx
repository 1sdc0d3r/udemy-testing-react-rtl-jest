import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // find element with role of button and text of 'change to blue'
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change to red");
  expect(colorButton.textContent).toMatch(/Change to red/i);
});

test("inital conditions", () => {
  render(<App />);
  // check button starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check checkbox starts unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button is disabled when checkbox is checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("red button is gray when disabled and red when enabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("blue button is gray when disabled and blue when enabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
