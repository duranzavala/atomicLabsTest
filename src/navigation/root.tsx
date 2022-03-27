import React from 'react';

import SignUpComponent from '@Auth/screens/signUpComponent';
import HomeComponent from '@Home/screens/homeComponent';
import PhoneVerificationComponent from '@Auth/screens/phoneVerificationComponent';
import SignUpSuccessComponent from '@Auth/screens/signUpSuccessComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export enum Screens {
    Home = 'Home',
    SignUp = 'SignUp',
    PhoneVerification = 'PhoneVerification',
    SignUpSuccess = 'SignUpSuccess',
}

export type NavigationParams = {
    Home: undefined,
    SignUp: undefined,
    PhoneVerification: undefined,
    SignUpSuccess: undefined,
};

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.Home} headerMode='none'>
            <Stack.Screen name={Screens.Home} component={HomeComponent} />
            <Stack.Screen name={Screens.SignUp} component={SignUpComponent} />
            <Stack.Screen name={Screens.PhoneVerification} component={PhoneVerificationComponent} />
            <Stack.Screen
                name={Screens.SignUpSuccess}
                component={SignUpSuccessComponent}
                options={{ gestureEnabled: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
