import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect 1')
    
    return () => {
      console.log('useEffect 1 return')
    }
  }, [])

  useEffect(() => {
    console.log('useEffect 2')
  }, [])

  useEffect(() => {
    console.log('useEffect 3')
  }, [count])

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     
    </>
  )
}

export default App
