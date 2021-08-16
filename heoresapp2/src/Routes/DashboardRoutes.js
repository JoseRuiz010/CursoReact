import React from 'react'
import { Navbar } from '../Components/ui/Navbar'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,

} from "react-router-dom";
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { HeroesScreen } from '../Components/heroes/HeroesScreen';
import { DcScreen } from '../Components/dc/DcScreen';
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='p-1'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}/>
                    <Route exact path='/hero/:heroeId' component={HeroesScreen}/>
                    <Route exact path='/dc' component={DcScreen}/>
                    <Redirect to='/marvel'/>
                </Switch>
            </div>
        </>
    )
}
