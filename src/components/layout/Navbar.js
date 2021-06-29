import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAuthLogout } from '../../stateManagement/actions/auth';



export const Navbar = () => {
    const { email } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleClickLogout = () => {

        dispatch( startAuthLogout() );
    }

    return (
        <div className=" navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                { `Correo: ${email}` }
            </span>

            <button className="btn btn-outline-danger" onClick = { handleClickLogout }>
                <i className ="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
