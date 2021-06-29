import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import { Navbar } from '../components/layout/Navbar';
import { Home } from '../views/home/Home';
import { RegisterOrders } from '../views/orders/RegisterOrders';
  
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/registerOrders" component={ RegisterOrders }/>
                <Route path="/" component={ Home }/>

                
            </Switch>
        </>
    )
}
