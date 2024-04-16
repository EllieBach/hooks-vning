import React from 'react'
import {useCounter} from '../hooks/useCounter'

const Counter = () => {
    const counter = useCounter();
  return (
    <>
    <p>count {counter.count}</p>
    <button onClick={counter.increment}>increment</button>
    <button onClick={counter.decrement}>decrement</button>
    </>
  )
}

export default Counter