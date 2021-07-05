import React, { useState } from "react";
import PropTypes from "prop-types";
export default function AddCategory({ add }) {
  const [inputValue, setinputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue && add((cats) => [inputValue, ...cats]);

    console.log("Enter");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          onChange={(e) => setinputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder={"Ingrese el nombre del Gif"}
        ></input>
      </form>
    </div>
  );
}

AddCategory.propTypes = {
  add: PropTypes.func.isRequired,
};
