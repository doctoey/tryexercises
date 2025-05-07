import { Counter } from "./components/Counter";
import { Greeting } from "./components/Greeting";
import { TodoList } from "./components/TodoList";
import { Toggle } from "./components/Toggle";

function App() {
  return (
    <div>
      <Greeting name="Cheewathun L." />
      <Counter />
      <Toggle />
      <TodoList />
    </div>
  );
}

export default App;
