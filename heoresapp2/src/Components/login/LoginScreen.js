import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { types } from "../type/Type";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Jose",
      },
    });
    // console.log(dispatch);
    history.replace("/");
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={handleClick} className="btn btn-primary">
        Iniciar Sesion
      </button>
    </div>
  );
};
