import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          placeholder="Name"
          type="text"
          name="name"
        />
        <input
          className="auth__input"
          placeholder="Email"
          type="text"
          name="email"
        />
        <input
          className="auth__input"
          placeholder="Password"
          type="text"
          name="pass"
        />
        <input
          className="auth__input"
          placeholder="Comfirm Password"
          type="text"
          name="passConfirm"
        />
        <button className="btn btn-primary btn-block" type="submit">
          Registrar
        </button>

        <hr></hr>

        <Link className="link mb-5" to="auth/register">
          Create New Accound
        </Link>
      </form>
    </>
  );
};
