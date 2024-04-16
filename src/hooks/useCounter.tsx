import React, { useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState<number>(0);

    const increment =(): void => {
      setCount((v)=>v+1);
    };

    const decrement =(): void=>{
      setCount((d)=>d-1);
    };
    return {count, increment, decrement}
};



