import { useState } from "react";
import "./App.css";

export default function App() {
  // let isActive = false;
  let [isActive, setIsActive] = useState(false);

  // Función para alternar el valor de 'isActive'

  function handleClick() {
    isActive = !isActive;
    // Check that the value changes correctly.
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
