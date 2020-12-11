import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Cadastro from '../pages/Cadastro';
import MainTab from '../pages/Tabs/MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);