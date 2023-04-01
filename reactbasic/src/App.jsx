import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Cheewathun Lerttanapit")
  const [ifTrue, setIfTrue] = useState(true)

  const user = {
    firstName:"toey",
    lastName:"kung",
    img:"https://images.unsplash.com/photo-1680169276046-d90d8f233b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    haha:"araiwa"
  }

  const user2 = {
    firstName:"ajabahe",
    lastName:"bahe",
    img:"https://images.unsplash.com/photo-1680310509150-c22c7396340f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    haha:"araiwa"
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  function handleClickUp(){
    setCount(count +1) 
  }

  function handleClickDown(){
    setCount(count -1) 
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    //react fragments
    <>
    <h1 style={{ color: 'red',border:'1px solid black'}}>Welcome to my app</h1>
    
    <p>My name is {user.firstName} {user.lastName}</p>
    <img src={user.img} width="150" height="150" alt={user.haha} />
    
    <MyProfile data={user2}/>

    <p>{count}</p>

    <button onClick={handleClickUp} >InCrease</button>
    <button onClick={handleClickDown} >DeCrease</button>
    <button onClick={handleClick}>
      Clicked {count} times
    </button>

      <MyButton />

      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}

      <ul>
        {products.map(item => (
          <li ket={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
