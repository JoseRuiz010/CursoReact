import React, { useState } from "react";
import useCounter from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";

const MultipleCustomH = () => {
  const { counter, increment } = useCounter(1);
  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(state);
  const { loading, data } = state;
  const { author, quote } = !!data && data[0];
  console.log(author, quote);
  return (
    <div>
      <h1>Breaking bad</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blocquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente{" "}
      </button>
    </div>
  );
};
export default MultipleCustomH;
