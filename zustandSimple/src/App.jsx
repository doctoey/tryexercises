import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { create } from "zustand";
import Vote from "./vote";
import VoteApi from "./VoteApi";
import Fruits from "./Fruits";

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
      <h1 style={{ fontSize: "24px", color: "#333" }}>
        {bearCount} bears around here...
      </h1>
    </div>
  );
}

function BearControls() {
  const increaseBears = useBearStore((state) => state.increase);
  const resetBears = useBearStore((state) => state.removeAll);

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={increaseBears}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Add Bear
      </button>
      <button
        onClick={resetBears}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset Bears
      </button>
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
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#F0FFF0",
          color: "#333",
          padding: "10px",
          borderRadius: "8px",
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
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BearCounter />
        <BearControls />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to="/vote"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            marginRight: "10px",
            display: "inline-block",
          }}
        >
          Go to Vote
        </Link>
        <Link
          to="/voteapi"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            marginRight: "10px",
            display: "inline-block",
          }}
        >
          Go to VoteApi
        </Link>
        <Link
          to="/fruits"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          Go to Fruits
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
        <Route path="/voteapi" element={<VoteApi />} />
        <Route path="/fruits" element={<Fruits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
