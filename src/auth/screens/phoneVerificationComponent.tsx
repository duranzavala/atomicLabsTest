import { Images } from '@Assets/index'
import StepperComponent, { Steps } from '@Components/stepper/stepperComponent';
import Strings from '@Utils/strings';
import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import Styles from '@Auth/styles/phoneVerificationStyles';
import InputComponent from '@Components/input/inputComponent';
import ButtonComponent from '@Components/button/buttonComponent';
import { useDispatch } from 'react-redux';
import FooterComponent from '@Components/footer/footerComponent';
import { actionVerifyPhoneNumber } from '@Auth/state/authActions';

const PhoneVerificationComponent: React.FC = () => {
    const dispatch = useDispatch();

    const [phoneNumber, setPhoneNumber] = useState('');

    const isValidPhoneNumber = () => phoneNumber.length === 10;

    const isValidForm = () => isValidPhoneNumber();

    const handleOnVerifyPhoneNumber = () => dispatch(actionVerifyPhoneNumber({ phoneNumber }));

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
                        <StepperComponent currentStep={Steps.Two} title={Strings.phoneVerificationTitle} />
                        <Text numberOfLines={2} style={Styles.phraseOne}>
                            {Strings.phoneVerificationPhaseOne}
                        </Text>
                        <Text numberOfLines={2} style={Styles.phraseTwo}>
                            {Strings.phoneVerificationPhaseTwo}
                        </Text>
                        <InputComponent
                            value={phoneNumber}
                            inputStyle={Styles.input}
                            onChangeText={setPhoneNumber}
                            showError={!isValidPhoneNumber()}
                            errorMessage={Strings.phoneNumberError}
                            placeHolder={Strings.placeHolderPhoneNumber}
                            keyboardType='number-pad'
                        />
                        <ButtonComponent
                            buttonStyle={Styles.button}
                            title={Strings.continue}
                            disabled={!isValidForm()}
                            onPress={handleOnVerifyPhoneNumber}
                        />
                        <Image
                            resizeMode='contain'
                            style={Styles.spaceManMoon}
                            source={Images.spaceManMoon}
                        />
                    </View>
                    <FooterComponent />
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

export default PhoneVerificationComponent;
