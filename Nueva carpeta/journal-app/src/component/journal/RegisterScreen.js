import React from "react";
import { Link } from "react-router-dom";
import { UseForm } from "../../customHooks/UseForm";
import validator from "validator";

export const RegisterScreen = () => {
  const initialState = {
    name: "jose",
    email: "jose@gmail.com",
    password: "1234",
    password2: "1234",
  };
  const [form, hanndleForm] = UseForm(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Formulario Correcto");
      
    }
    console.log(form);
  };
  const isFormValid = () => {
    if (form.name.trim().length === 0) {
      console.log("Name is Required");
      return false;
    } else if (!validator.isEmail(form.email)) {
      console.log("Email is not valid");
      return false;
    } else if (form.password !== form.password2 || form.password.length < 3) {
      console.log("Pass is not valid");
      return false;
    }
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="auth__error">Hola</div>
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
