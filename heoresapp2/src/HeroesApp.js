import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./Components/Auth/AuthContext";
import { autReducer } from "./Components/Auth/AuthReducer";
import { AppRouter } from "./Routes/AppRouter";
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
export const HeroesApp = () => {
  const [user, dispatch] = useReducer(autReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
