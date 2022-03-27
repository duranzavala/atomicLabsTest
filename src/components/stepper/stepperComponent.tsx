import React from 'react';
import { Image, Text, View } from 'react-native';
import Styles from '@Components/stepper/stepperStyles';
import { Images } from '@Assets/index';

export enum Steps {
    One = 1,
    Two = 2,
}

interface Props {
    currentStep: number;
    title: string;
}

const StepperComponent: React.FC<Props> = ({ currentStep, title }) => {
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.stepsContainer}>
                <Image
                    resizeMode='contain'
                    style={Styles.stepOne}
                    source={currentStep === Steps.One ? Images.stepOneBold : Images.stepCompleted}
                />
                <Image
                    resizeMode='contain'
                    style={Styles.stepTwo}
                    source={currentStep === Steps.One ? Images.stepTwo : Images.stepTwoBorder}
                />
            </View>
            <View style={[Styles.stepBar, currentStep === Steps.Two && Styles.stepBarCompleted]}>
                {currentStep === Steps.One && <View style={Styles.stepBarHalfCompleted}/>}
            </View>
            <View style={Styles.mainTitleContainer}>
                <Image
                    resizeMode='contain'
                    style={Styles.titleStepNumber}
                    source={currentStep === Steps.One ? Images.stepOneBold : Images.stepTwoBold}
                />
                <View style={Styles.titleTextContainer}>
                    <Text style={Styles.titleRowOne}>{title.split('\n')[0]}</Text>
                    <Text style={Styles.titleRowTwo}>{title.split('\n')[1]}</Text>
                </View>
            </View>
        </View>
    );
}

export default StepperComponent;
