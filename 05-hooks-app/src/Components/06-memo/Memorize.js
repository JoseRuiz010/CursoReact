import React, { useState } from "react";
import useCounter from "../../Hooks/useCounter";
import Smoll from "../06-memo/Smoll";
const Memorize = () => {
  const { counter, increment } = useCounter();

  const [Show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter:<Smoll value={counter}></Smoll>{" "}
      </h1>
      <hr></hr>

      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!Show)}
      >
        Show/Hide {JSON.stringify(Show)}
      </button>
    </div>
  );
};
export default Memorize;
