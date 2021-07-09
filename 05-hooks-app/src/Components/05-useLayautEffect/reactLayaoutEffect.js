import React, { useState } from "react";
import useCounter from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";

const LayautDefect = () => {
  const { counter, increment } = useCounter(1);
  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(state);
  const { data } = state;
  const { quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking bad</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0">{quote}</p>
      </blockquote>

      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente{" "}
      </button>
    </div>
  );
};
export default LayautDefect;
