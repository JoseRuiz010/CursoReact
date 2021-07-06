import React from "react";
import { useFetch } from "../../Hooks/useFetch";

const MultipleCustomH = () => {
  const state = useFetch("https://www.breakingbadapi.com/api/quotes/1");
  console.log(state);

  return (
    <div>
      <h1>CH</h1>
    </div>
  );
};
export default MultipleCustomH;
