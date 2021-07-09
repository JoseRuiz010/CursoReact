import React, { useRef } from "react";
import "../02-useEffect/efect.css";
const FocusScreen = () => {
  const ref = useRef();
  console.log(ref);

  const habdleClick = () => {
    ref.current.select();
    console.log(ref);
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input ref={ref} className="form-control" placeholder="Su nombre"></input>
      <br></br>
      <button onClick={habdleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
};
export default FocusScreen;
