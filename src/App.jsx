import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [buttonEnabled, setButtonEnabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonEnabled}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={buttonEnabled}
        aria-checked={buttonEnabled}
        onClick={(e) => setButtonEnabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
