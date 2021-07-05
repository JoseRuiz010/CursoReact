import React, { useState } from "react";
import PropTypes from "prop-types";
export default function CounterApp({ value }) {
  const [Counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(Counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleResta = () => {
    setCounter(Counter - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{Counter}</h2>
      <button onClick={() => handleAdd()}> + </button>
      <button onClick={() => handleResta()}> - </button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
CounterApp.propTypes = {
  value: PropTypes.number,
};
