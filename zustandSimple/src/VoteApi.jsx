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
        maxWidth: "500px",
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
        VoteAPI
      </h4>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Current People Votes:{" "}
        <span style={{ color: "#ff9800", fontWeight: "bold" }}>
          {votes.length}
        </span>
      </p>
      <button
        onClick={() => {
          fetchVotes(voteapi);
        }}
        style={{
          padding: "12px 24px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Fetch Votes
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

export default VoteApi;
