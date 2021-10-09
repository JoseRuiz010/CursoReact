import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../component/journal/Login";
import { RegisterScreen } from "../component/journal/RegisterScreen";
export const AuthRouter = () => {
  return (
    <div className="auth__main">
    <div className='auth__box-container'>
    <Switch>
        <Route path="/auth/login" component={Login}></Route>
        <Route path="/auth/register" component={RegisterScreen}></Route>
        <Redirect to="/auth/login"></Redirect>
      </Switch>
    </div>
    </div>
  );
};
