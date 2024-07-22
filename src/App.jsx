import { useState } from 'react'
import Model from './component/Model'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Model/>
    </>
  )
}

export default App
