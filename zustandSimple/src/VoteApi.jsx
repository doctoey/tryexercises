import React from "react";
import { create } from "zustand";
import { Link } from "react-router-dom";

const voteapi = "https://api.github.com/search/users?q=john&per_page=5";
const useVoteStore = create(() => ({
  voteapi: voteapi,
  Votes: [],
  fetch: async (voteapi) => {
    const response = await fetch(voteapi);
    const json = await response.json();
    useVoteStore.setState({ Votes: json.items });
  },
}));

function VoteApi() {
  const votes = useVoteStore((state) => state.Votes);
  const fetchVotes = useVoteStore((state) => state.fetch);

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
        VoteAPI
      </h4>
      <p style={{ fontSize: "18px", color: "#666" }}>
        Current People Votes:{" "}
        <span style={{ color: "orange" }}>{votes.length}</span>
      </p>
      <button
        onClick={() => {
          fetchVotes(voteapi);
        }}
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
        Fetch Vote
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

export default VoteApi;
