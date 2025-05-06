import Counter from "./components/Counter";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div>Counter Component</div>
      <Counter />
      <br />
      <br />
      <br />
      <div> ============================================================ </div>
      <div>UserList Component</div>
      <UserList />
      <br />
      <br />
      <br />
      <div> ============================================================ </div>
      <div>RegisterForm Component</div>
      <RegisterForm />
    </>
  );
}

export default App;
