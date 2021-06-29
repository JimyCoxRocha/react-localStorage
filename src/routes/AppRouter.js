import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Login } from '../views/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';
import { isLogged } from '../stateManagement/actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch( isLogged() );
    }, [ dispatch ])

    return (
        <div>
            <Router>
                <Switch>
                    <PublicRoute exact path="/login" isAuthenticated = { isAuthenticated } component={ Login } />
                    <PrivateRoute path="/" isAuthenticated = { isAuthenticated } component={ DashboardRoutes } />

                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    )
}
