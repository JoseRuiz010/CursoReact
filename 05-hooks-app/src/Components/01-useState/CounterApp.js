import React, { useState } from "react";
import "./counter.css";
export default function CounterApp() {
  const [state, setstate] = useState({
    counter1: 10,
    counter2: 20,
  });
  const { counter1, counter2 } = state;
  return (
    <>
      <h1>Counter {/*state*/}</h1>
      <p>Counter1 {counter1}</p>
      <p> Counter2 {counter2}</p>
      <hr></hr>
      <button
        onClick={() => setstate({ ...state, counter1: counter1 + 1 })}
        className="btn btn-primary"
      >
        {" "}
        +1
      </button>
    </>
  );
}
