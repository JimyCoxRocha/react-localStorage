import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            Site Home
            
            <Link to="/registerOrders" > Register </Link>
        </div>
    )
}
