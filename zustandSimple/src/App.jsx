import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { create } from "zustand";
import Vote from "./vote";

const useBearStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  removeAll: () => set({ bears: 0 }),
  update: (newCount) => set({ bears: newCount }),
}));

function BearCounter() {
  const bearCount = useBearStore((state) => state.bears);
  return (
    <div>
      <h1>{bearCount} bears around here...</h1>
    </div>
  );
}

function BearControls() {
  const increaseBears = useBearStore((state) => state.increase);
  const resetBears = useBearStore((state) => state.removeAll);

  return (
    <div>
      <button onClick={increaseBears}>Add Bear</button>
      <button onClick={resetBears}>Reset Bears</button>
    </div>
  );
}

function Home() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#F0FFF0",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        Zustand Version I
      </h1>

      <div
        style={{
          backgroundColor: "#ffa500",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <BearCounter />
        <BearControls />
      </div>

      <div style={{ textAlign: "center" }}>
        <Link
          to="/vote"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          Go to Vote
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
