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
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h4 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        Vote
      </h4>
      <p style={{ fontSize: "18px", color: "#666" }}>Current Votes: {votes}</p>
      <button
        onClick={incrementVote}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "16px",
        }}
      >
        Increase Vote
      </button>
      <button
        onClick={decrementVote}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "16px",
        }}
      >
        Decrease Vote
      </button>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#2196F3",
          fontSize: "16px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Vote;
