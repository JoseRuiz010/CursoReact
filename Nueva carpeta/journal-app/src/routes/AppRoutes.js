import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { login } from "../action/auth";
import { JournalScreen } from "../component/journal/JournalScreen";
import { auth } from "../firebase/firebase-config";

import { AuthRouter } from "./AuthRouter";
export const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter}></Route>

          <Route exact path="/" component={JournalScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
};
