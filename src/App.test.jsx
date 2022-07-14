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
