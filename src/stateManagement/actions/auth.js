import { types } from "../../types/types";
import { existUserLocalStorage, loggedUserLocalStorage, saveUserLocalStorage, viewLogged } from "../../utils/userLocalStorage";

export const isLogged = () => {
    return ( dispatch ) => {
        try{
            viewLogged()
                && (dispatch(login({
                    email: viewLogged().email, 
                    isAuthenticated: true
            })));
        }catch ( err ){
            console.log(err);
        }
        
    }
}

export const startLogin = ( email, password ) => {
    return ( dispatch ) => {

        const userExist =  existUserLocalStorage( email, password );
        if( userExist ){
            dispatch(login({
                email: email,
            }));
            saveUserLocalStorage( email, password );
        }else{
            console.log("El usuario o contraseña no son correctos. :/ ");
        }

        //Peticion al LocalStorage
        //Si existe, ejecutar el dispatch
        
    }
}


export const startAuthLogout = () => {
    return ( dispath ) => {
        loggedUserLocalStorage();
        
        dispath( authLogout() );
    }
}
export const authLogout = () => ({
    type: types.authLogout
})


export const startRegister = ( email, password, name ) => {
    return ( dispatch ) => {
        try{
            dispatch(login({
                email: `${email}`,
            }));
            saveUserLocalStorage( email, password );

        }catch( err ){
            console.log(err);
        }

    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user

});
/* 
export const startChecking = () => {
    return async(dispatch) => {

    }
}

const checkingFinish = () => ({ 
    type: types.authCheckingFinish 
});
 */

