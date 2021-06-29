
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    /* ui: uiReducer,
    calendar: calendarReducer, */
    auth: authReducer
});

