import React from "react";
import "../02-useEffect/efect.css";
const FocusScreen = () => {
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input className="form-control" placeholder="Su nombre"></input>
      <br></br>
      <button className="btn btn-primary mt-5">Focus</button>
    </div>
  );
};
export default FocusScreen;
