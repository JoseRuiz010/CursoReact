import React, { useMemo, useState } from "react";
import useCounter from "../../Hooks/useCounter";
const MemoHook = () => {
  const { counter, increment } = useCounter(500);

  const [Show, setShow] = useState(true);
  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Ahi vamos");
    }

    return `${iteraciones} iteraciones realizadas`;
  };

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter:<small>{counter}</small>{" "}
      </h3>
      <hr></hr>
      <p>{memoProcesoPesado}</p>
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
export default MemoHook;
