import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const getQuote = async () => {
    const response = await axios.get('http://localhost:3000/quote' , { crossdomain: true })
    const quote = response.data
    const [text, author] = quote.split(' - ')
    setText(text)
    setAuthor(author)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='toeyja'>
          <button onClick={getQuote}>
            Quoteeee
          </button>
          <h6>{text}</h6>
          <h6>{author}</h6>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    
    </>
  )
}

export default App
