import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

type Props = {
  onAddclick: (text: string) => void;
}

function App(props : Props) {
  const [txt, setTxt] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />

      <button
        onClick={() => {
          const todoItem: Todo = {
            id: new Date().getTime(),
            text: txt,
            isCompleted: false,
          };
          setTodos((todos) => [...todos, todoItem]);
          setTxt("");
        }}
      >
        ADD
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
