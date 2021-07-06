import React, { useState } from "react";
import useCounter from "../../Hooks/useCounter";
import './01-useState/counter.css'
export default function CounterWithCustomHooks() {
  
   const {counter,increment,decrement,reset}= useCounter();
  
  return (
    <>
      <h1>CounterWithCustomHooks</h1>
      <p>{counter}</p>
      <button
      onClick={()=>increment(1)}
      >+1</button>
      <button
      onClick={()=>decrement(1)}
      >+1</button>
       <button
      onClick={()=>reset()}
      >Reset</button>
    </>
  );
}
