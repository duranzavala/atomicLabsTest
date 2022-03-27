import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from '@Auth/styles/signUpStyles';
import { useDispatch } from 'react-redux';
import { actionAuthenticate } from '@Auth/state/authActions';
import Strings from '@Utils/strings';
import { Images } from '@Assets/index';
import FooterComponent from '@Components/footer/footerComponent';
import StepperComponent, { Steps } from '@Components/stepper/stepperComponent';
import ButtonComponent from '@Components/button/buttonComponent';
import InputComponent from '@Components/input/inputComponent';

const SignUpComponent: React.FC = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleOnSignUp = () => dispatch(actionAuthenticate({ firstName, lastName }));

    const isValidFirstName = () => firstName.length >= 5;

    const isValidLastName = () => lastName.length >= 5;

    const isValidForm = () => isValidFirstName() && isValidLastName();

    return (
        <KeyboardAvoidingView
            behavior='position'
            style={Styles.keyboardContainer}
            contentContainerStyle={Styles.keyboardContainer}
        >
            <ImageBackground
                source={Images.HomeBackground}
                style={Styles.backgroundImage}
            >
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        resizeMode='contain'
                        style={Styles.logo}
                        source={{ uri: Images.atomicLogo }}
                    />
                    <View style={Styles.mainContainer}>
                        <StepperComponent currentStep={Steps.One} title={Strings.weWantKnowYou} />
                        <Text numberOfLines={2} style={Styles.title}>
                            {Strings.signUpTitle}
                        </Text>
                        <InputComponent
                            value={firstName}
                            inputStyle={Styles.input}
                            onChangeText={setFirstName}
                            showError={!isValidFirstName()}
                            errorMessage={Strings.firstNameError}
                            placeHolder={Strings.placeHolderFirstName}
                        />
                        <InputComponent
                            value={lastName}
                            inputStyle={Styles.input}
                            onChangeText={setLastName}
                            showError={!isValidLastName()}
                            errorMessage={Strings.lastNameError}
                            placeHolder={Strings.placeHolderLastName}
                        />
                        <ButtonComponent
                            buttonStyle={Styles.button}
                            title={Strings.send}
                            disabled={!isValidForm()}
                            onPress={handleOnSignUp}
                        />
                        <Image
                            resizeMode='contain'
                            style={Styles.spaceManEating}
                            source={Images.spaceManEating}
                        />
                    </View>
                    <FooterComponent />
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default SignUpComponent;
