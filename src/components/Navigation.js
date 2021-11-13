import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon, StyleService, useStyleSheet} from "@ui-kitten/components";

import HomeScreen from './screens/Homescreen';
import Settings from './screens/Settings';
import Overview from "./screens/Overview";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {

    const styles = useStyleSheet(themedStyles);

    return (
        <Tab.Navigator screenOptions={{
            headerStyle: styles.header,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: '#EB690C',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
            },
        }}>
            <Tab.Screen name='Tracking' component={HomeScreen}
                        options={{
                            tabBarIcon: ({color}) => (
                                <Icon style={styles.icon} fill={color} name={"activity-outline"}/>
                            ),
                        }}
            />
            <Tab.Screen name='Records' component={Overview} options={{
                tabBarIcon: ({color}) => (
                    <Icon style={styles.icon} fill={color} name={"bar-chart-outline"}/>
                ),
            }}/>
            <Tab.Screen name='Settings' component={Settings} options={{
                tabBarIcon: ({color}) => (
                    <Icon style={styles.icon} fill={color} name={"settings-outline"}/>
                ),
            }}/>
        </Tab.Navigator>
    )
};

export const AppNavigator = ({theme}) => (
    <NavigationContainer theme={theme}>
        <HomeNavigator/>
    </NavigationContainer>
);

const themedStyles = StyleService.create({
    header: {
        backgroundColor: 'header-background',
    },
    tabBar: {
        height: 55,
        backgroundColor: 'color-grey-300',
        paddingTop: 5,
        paddingBottom: 5,
    },
    icon: {
        width: 32,
        height: 32,
        marginBottom: 5,
    }
});
