import React, { useState } from 'react'

export const useCounter = (initialValue: number, min: number, max:number) => {
    const [count, setCount] = useState<number>(initialValue);

    const increment =(): void => {
      if(count<max){
      setCount((v)=>v+1);
    }
    };
const reset=():void=>{
  setCount(0);
}
    const decrement =(): void=>{
      if(count>min){
      setCount((d)=>d-1);
      }
    };
    return {count, increment, decrement, reset, min,max}
};



