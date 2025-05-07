import { useState } from "react";

export function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div>
      <h1>Toggle START</h1>
      <p>{on ? "ON" : "OFF"}</p>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </div>
  );
}
