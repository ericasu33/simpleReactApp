import React, { useState }  from 'react'

export function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign: "center"}}>
      <h1>
       {count}
      </h1>
      
      <h1>
        <button onClick={(event) => setCount(count + 1)}> Plus </button>
      </h1>
      <h1>
        <button onClick={(event) => setCount(count - 1)}> Minus </button>
      </h1>
    </div>
  )
}