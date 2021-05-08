import React, { FC } from "react";
import { Navigation } from "./navigation/Navigation";
//* Redux
import ReduxThunk from 'redux-thunk'
import { Provider, useSelector } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/rootReducer'
import { langType } from "redux/langStore/reducers";
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export const App: FC = () => {
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
    );
}

export const MainApp: FC = () => {
    const data: langType = useSelector((state: any) => state.langReducer);
    return (
        <Navigation />
    )
}