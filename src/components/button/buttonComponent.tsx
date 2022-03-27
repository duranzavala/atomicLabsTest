import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import Styles from '@Components/button/buttonStyles';

interface Props {
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    disabled?: boolean;
    textStyle?: TextStyle;
}

const ButtonComponent: React.FC<Props> = ({
    title,
    onPress,
    buttonStyle,
    disabled,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                Styles.mainContainer,
                buttonStyle && buttonStyle,
                disabled && Styles.disabledButton,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[Styles.mainText, textStyle && textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonComponent;
