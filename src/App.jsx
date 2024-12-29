import { useState } from 'react'
import ListView from './components/ListView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListView/>
    </>
  )
}

export default App
