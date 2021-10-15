import React from "react";
import { Link } from "react-router-dom";
import { UseForm } from "../../customHooks/UseForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError, loginStart } from "../../action/ui";
import { starREgister } from "../../action/auth";
import { auth } from "../../firebase/firebase-config";

export const RegisterScreen = () => {
  const initialState = {
    name: "jose",
    email: "jose@gmail.com",
    password: "1234",
    password2: "1234",
  };
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);

  const [form, hanndleForm] = UseForm(initialState);
  const { loading } = state.ui;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(loginStart());
      dispatch(starREgister(auth, form.email, form.password, form.name));
    }
    //console.log(form);
  };
  const isFormValid = () => {
    if (form.name.trim().length === 0) {
      dispatch(setError("Name is Required"));

      return false;
    } else if (!validator.isEmail(form.email)) {
      dispatch(setError("Email is not valid"));
      // console.log("Email is not valid");
      return false;
    } else if (form.password !== form.password2 || form.password.length < 3) {
      dispatch(setError("Pass is not valid"));
      //  console.log("Pass is not valid");
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleSubmit}>
        {state.ui.msgError && (
          <div className="auth__error">{state.ui.msgError}</div>
        )}

        <input
          className="auth__input"
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={hanndleForm}
        />
        <input
          className="auth__input"
          placeholder="Email"
          type="text"
          name="email"
          value={form.email}
          onChange={hanndleForm}
        />
        <input
          className="auth__input"
          placeholder="Password"
          type="text"
          name="password"
          value={form.password}
          onChange={hanndleForm}
        />
        <input
          className="auth__input"
          placeholder="Comfirm Password"
          type="text"
          name="password2"
          value={form.password2}
          onChange={hanndleForm}
        />
        {
          <button
            className="btn btn-primary btn-block "
            disabled={loading}
            type="submit"
          >
            Registrar
          </button>
        }

        <hr></hr>

        <Link className="link mb-5" to="auth/register">
          Create New Accound
        </Link>
      </form>
    </>
  );
};
