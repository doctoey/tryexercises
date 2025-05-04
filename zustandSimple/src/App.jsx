import "./App.css";
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  removeAll: () => set({ bears: 0 }),
  update: (newCount) => set({ bears: newCount }),
}));

function BearCounter() {
  const bearCount = useBearStore((state) => state.bears);
  return <h1>{bearCount} bears around here...</h1>;
}

function BearControls() {
  const increaseBears = useBearStore((state) => state.increase);
  const resetBears = useBearStore((state) => state.removeAll);

  return (
    <div>
      <button onClick={increaseBears}>Add Bear</button>
      <button onClick={resetBears}>Reset Bears</button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Zustand Version I</h1>
      <BearCounter />
      <BearControls />
    </>
  );
}

export default App;
