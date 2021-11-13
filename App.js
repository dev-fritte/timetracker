import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import myTheme from './custom-theme.json'
import {AppNavigator} from "./src/components/Navigation";


export default function App() {
    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={{...eva.dark, ...myTheme}}>
                <AppNavigator/>
            </ApplicationProvider>
        </>
    );
}
