import { useState } from "react";

export function TodoList() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, i) => (
          <li key={i} data-testid="todo-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
