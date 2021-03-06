import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,

} from "react-router-dom";
import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                 
                <Switch>
                    <Route exact path='/login' component={LoginScreen}></Route>
                    <Route  path='/' component={DashboardRoutes}></Route>
 
               
                </Switch>
            </div>
        </Router>

    )
}
