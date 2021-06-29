import React from 'react'
import { AppRouter } from './routes/AppRouter';

import { Provider } from 'react-redux'
import { store } from './stateManagement/store/store';


export const AppPage = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
