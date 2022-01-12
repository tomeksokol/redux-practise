import React from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>+1</button>
      <p>{value}</p>
      <button onClick={onDecrement}>-1</button>
    </div>
  )
}

export default Counter
