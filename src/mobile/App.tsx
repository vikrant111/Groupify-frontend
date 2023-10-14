import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Hello world Mobile {count}</h1>
        <button onClick={()=>setCount((prev) => prev + 1)}>Click</button>
    </div>
  )
}

export default App
