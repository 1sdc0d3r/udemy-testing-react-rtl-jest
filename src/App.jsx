import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? "grey" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onClick={(e) => setButtonDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
