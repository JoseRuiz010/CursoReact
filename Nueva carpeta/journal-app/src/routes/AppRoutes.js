import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JournalScreen } from "../component/journal/JournalScreen";
 
import { AuthRouter } from "./AuthRouter";
export const AppRoutes = () => {
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
