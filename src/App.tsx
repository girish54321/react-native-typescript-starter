import React, { FC } from "react";
import { LocalizationContextProvider } from "./components/LocalizedContext/LocalizationContextProvider";
import { Theme } from "./components/ThemeContext/ThemeContext";
import { ThemeContextProvider } from "./components/ThemeContext/ThemeContextProvider";
const themes = require('./Config/themes.json');
import translations from "./localization/translations.json";
import { Navigation } from "./navigation/Navigation";
//* Redux
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/rootReducer'
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export const App: FC = () => {
    const initialTheme: Theme = themes[0];

    return (
        <Provider store={store}>
            <ThemeContextProvider initialTheme={initialTheme} supportedThemes={themes}>
                <LocalizationContextProvider initialLanguage='en' supportedLanguages={['fr', 'en']} translations={translations}>
                    <Navigation />
                </LocalizationContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}