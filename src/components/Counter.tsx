import React from 'react';
import { useCounter } from '../hooks/useCounter'; 

const Counter = ({ initialValue, min, max }: { initialValue: number; min: number; max: number }) => {
    const counter = useCounter(initialValue, min, max); 
    
    return (
        <>
            <p>Count: {counter.count}</p>
            <button onClick={counter.increment}>Increment</button>
            <button onClick={counter.decrement}>Decrement</button>
            <button onClick={counter.reset}>Reset</button>
        </>
    );
};

export default Counter;
