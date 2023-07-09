import { useState } from 'react';

interface Student {
  id: number;
  name: string;
}

function Profiles() {
  const students: Student[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Eve' },
    { id: 4, name: 'Charlies' },
  ];

  return (
    <ul>
      {students.map((student) => {
        return <Profile key={student.id} student={student} onProfileClick={console.log}/>
      })}
    </ul>
  );
}

type ProfileProps = { 
  student: Student 
  onProfileClick: (student: Student) => void
}

function Profile({ student, onProfileClick }: ProfileProps) {
  return (
    <li onClick={() => {
      onProfileClick(student)
    }}>
      name: [{student.id}] {student.name}
    </li>
  );
}

function Counter() {
  const [counter, setCounter] = useState<number>(0)
  return <>
    <p onClick={() => setCounter(counter + 1)}>Increase counter: {counter}</p>
  </>
}

function Page() {
  const name = 'Guutong';
  const age = 18;
  const isLoading = false;

  return (
    <>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
      <h1>Hello {name}!</h1>
      <h1>Your are {age}! years old.</h1>
      {isLoading ? <p>Loading .... </p> : <p>Loaded</p>}
      {isLoading && <p>Loading .... </p>}
      {!isLoading && <p>Loaded</p>}
      <br />
      <Profiles />
    </>
  );
}

export default Page;