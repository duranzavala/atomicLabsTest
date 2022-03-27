import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from '@Auth/styles/signUpStyles';
import { useDispatch } from 'react-redux';
import { actionAuthenticate } from '@Auth/state/authActions';
import Strings from '@Utils/strings';

const SignUpComponent: React.FC = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('Arnulfo');
    const [lastName, setLastName] = useState('Duran');

    const handleOnSignUp = () => dispatch(actionAuthenticate({ firstName, lastName }));

    return (
        <View style={Styles.mainContainer}>
            <TextInput
                onChangeText={setFirstName}
                style={Styles.textInput}
                placeholder='nombre'
                value={firstName}
            />
            <TextInput
                onChangeText={setLastName}
                style={Styles.textInput}
                placeholder='apellidos'
                value={lastName}
            />
            <TouchableOpacity
                style={Styles.button}
                disabled={firstName.length < 1 && lastName.length < 1}
                onPress={handleOnSignUp}
            >
                <Text>{Strings.send}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpComponent;
