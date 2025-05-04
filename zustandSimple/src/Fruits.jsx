import React, { useRef } from "react";
import { create } from "zustand";
import { Link } from "react-router-dom";

const useFruitsStore = create((set) => ({
  fruits: ["banana", "orange", "apple"],
  addFruits: (fruit) => {
    set((state) => ({
      fruits: [...state.fruits, fruit],
    }));
  },
}));

function Fruits() {
  const fruits = useFruitsStore((state) => state.fruits);
  const addFruits = useFruitsStore((state) => state.addFruits);
  const inputRef = useRef();

  const addFruit = () => {
    const fruit = inputRef.current.value.trim();
    if (fruit) {
      addFruits(fruit);
      inputRef.current.value = "";
    }
  };

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
        Fruits
      </h4>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        I have:{" "}
        <span style={{ color: "#ff9800", fontWeight: "bold" }}>
          {fruits.length}
        </span>{" "}
        fruits
      </p>
      <div style={{ marginBottom: "20px" }}>
        <input
          ref={inputRef}
          placeholder="Enter a fruit"
          style={{
            padding: "10px",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginRight: "10px",
            fontSize: "16px",
            backgroundColor: "#f5f5f5",
          }}
        />
        <button
          onClick={addFruit}
          style={{
            padding: "10px 20px",
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
          Add Fruit
        </button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "20px 0",
          textAlign: "left",
        }}
      >
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "10px",
              fontSize: "16px",
              color: "#333",
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>
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

export default Fruits;
