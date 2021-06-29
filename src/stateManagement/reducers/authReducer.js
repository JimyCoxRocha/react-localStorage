import { types } from "../../types/types"


const initialState = {
    checking: true,
    //uid: "null",
    email: null,
    isAuthenticated: false,
}

export const authReducer = ( state= initialState, action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload,
                isAuthenticated: true
            }
            case types.authLogout:
                return {
                    ...state,
                    isAuthenticated: false,
                    ...initialState,
                    checking: false,
    
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        default:
            return state;
    }
}