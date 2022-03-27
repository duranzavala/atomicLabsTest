import React from 'react';
import { Text, View } from 'react-native';
import Styles from '@Auth/styles/signUpStyles';

const SignUpComponent: React.FC = () => {
    return (
        <View style={Styles.mainContainer}>
            <Text style={Styles.text}>Sign Up</Text>
        </View>
    );
};

export default SignUpComponent;
