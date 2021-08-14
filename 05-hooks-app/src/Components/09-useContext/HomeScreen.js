import React, { useContext } from "react";
import { UserContext } from "./Usercontext";

export const HomeScreen = () => {

  const {user} = useContext(UserContext)
  console.log(user);
  return (
  <div>
     <h1>Home</h1>
       <hr></hr>
      <h5 className="container">{JSON.stringify(user, null, 3)}</h5>
  </div>);
};
