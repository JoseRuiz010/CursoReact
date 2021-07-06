import React, { useEffect } from "react";
import { useForm } from "../../Hooks/useForm";

const FormHook = () => {
  const [formState, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formState;
  useEffect(() => {
    console.log("Email Cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Use Effect</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingrese su nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <br></br>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Ingrese su email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      <br></br>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
export default FormHook;
