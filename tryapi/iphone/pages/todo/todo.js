// import { useState } from "react";

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState("");

//   const addTodo = () => {
//     if (task.trim() !== "") {
//       setTodos([...todos, task]);
//       setTask("");
//     }
//   };

//   const removeTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Add a new task..."
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




import React from 'react'
import { useState } from "react";

function todo() {
  const [txt, setTxt] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div>
    <input type="text" value = {txt} onChange={(e)=> setTxt(e.target.value)} />
    <button onClick={()=>{
      const todoitem = {
        text:txt
      }
      setTodos((todos)=> [...todos,todoitem])
      setTxt("")
    }}> ADDDDDD</button>
    <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => {
              const updatedTodos = todos.filter((_, i) => i !== index);
              setTodos(updatedTodos);
            }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default todo


