import React from 'react';

import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {AppNavigator} from "./src/components/Navigation";

import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import myTheme from './custom-theme.json'


export default function App() {
    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={{...eva.dark, ...myTheme}}>
                <Provider store={store}>
                    <AppNavigator/>
                </Provider>
            </ApplicationProvider>
        </>
    );
}
