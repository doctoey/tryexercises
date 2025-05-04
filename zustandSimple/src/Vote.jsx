import React from "react";
import { create } from "zustand";
import { Link } from "react-router-dom";

const useVoteStore = create((set) => ({
  votes: 0,
  incrementVote: () => set((state) => ({ votes: state.votes + 1 })),
  decrementVote: () => set((state) => ({ votes: state.votes - 1 })),
}));

function Vote() {
  const votes = useVoteStore((state) => state.votes);
  const incrementVote = useVoteStore((state) => state.incrementVote);
  const decrementVote = useVoteStore((state) => state.decrementVote);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h4
        style={{
          color: "#333",
          fontSize: "28px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Vote
      </h4>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Current Votes:{" "}
        <span style={{ color: "#ff9800", fontWeight: "bold" }}>{votes}</span>
      </p>
      <button
        onClick={incrementVote}
        style={{
          padding: "12px 24px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Increase Vote
      </button>
      <button
        onClick={decrementVote}
        style={{
          padding: "12px 24px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
      >
        Decrease Vote
      </button>
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#2196F3",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#1769aa")}
          onMouseOut={(e) => (e.target.style.color = "#2196F3")}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Vote;
