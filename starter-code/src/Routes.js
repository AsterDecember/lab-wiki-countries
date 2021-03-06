import React from 'react'
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from './components/CountryDetail'
const Routes = () => (
    //switch just use the components of the router that you are using
    <Switch>
        <Route path='/country/:id' component={CountryDetail}/>
        <Route path="/" component={Home}/>
    </Switch>)

export default Routes