import "./App.css";

interface Student {
  id: number;
  name: string;
}

function App() {
  const name = "TOEY";
  const age = 14;
  const isLoading = true;

  function Profile() {
    const students2: Student[] = [
      { id: 1, name: "toey" },
      { id: 2, name: "toey2" },
      { id: 3, name: "toey3" },
    ];
  }
  const students: Student[] = [
    { id: 1, name: "toey" },
    { id: 2, name: "toey2" },
    { id: 3, name: "toey3" },
  ];

  return (
    <>
      <h1>Hellooo {name}</h1>
      <h2>Age: {age}</h2>
      {isLoading == true ? <p>loading</p> : <p>notload</p>}
      {isLoading && <p>loading</p>}
      {!isLoading && <p>notload</p>}

      <ul>
        {students.map((student) => {
          return <li key={student.id}>
            name: [{student.id}]{student.name}</li>;
        })}
      </ul>

      {/* <Profile /> */}
    </>
  );
}

export default App;
