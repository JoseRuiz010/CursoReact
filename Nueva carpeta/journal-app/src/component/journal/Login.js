import React from "react";
import { Link } from "react-router-dom";
import { UseForm } from "../../customHooks/UseForm";
import { useDispatch } from "react-redux";
import { googleLogin, starLogin } from "../../action/auth";
export const Login = () => {
  const dispatch = useDispatch();

  const [form, hanndleForm] = UseForm({
    email: "jose@gmail.com",
    password: "12345",
  });

  const { email, password } = form;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(starLogin(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
    console.log("66");
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={hanndleForm}
        />
        <input
          className="auth__input"
          placeholder="Password"
          type="text"
          name="password"
          value={password}
          onChange={hanndleForm}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Ingresar
        </button>

        <hr></hr>
        <div className="auth__social-network">
          <p>Login with social network</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <Link className="link" to="/auth/register">
            Create New Accound
          </Link>
        </div>
      </form>
    </>
  );
};
