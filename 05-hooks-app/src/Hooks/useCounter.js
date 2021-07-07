import { useState } from "react";

export default function useCounter(initialState = 0) {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };
  const reset = (factor = 0) => {
    setCounter(factor);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
