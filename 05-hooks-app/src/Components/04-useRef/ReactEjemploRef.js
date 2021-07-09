import React, { useEffect, useRef, useState } from "react";
import MultipleCustom from "../03-Ejemplo/MultipleCustomH";
const ReactEjemploRef = () => {
  const [show, setshow] = useState(false);
  
  return (
    <div>
      <h1>React Ref</h1>
      <hr></hr>

      {show && <MultipleCustom></MultipleCustom>}

      <button onClick={() => setshow(!show)} className="btn btn-primary mt-5">
        Toggle
      </button>
    </div>
  );
};
export default ReactEjemploRef;
