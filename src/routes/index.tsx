import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/Main-screen'; // ajuste o caminho se necessário
import SkillScreen from '../screens/Skill-screen'; // ajuste o caminho se necessário

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Skills" component={SkillScreen} options={{ title: 'Minhas Skills' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}