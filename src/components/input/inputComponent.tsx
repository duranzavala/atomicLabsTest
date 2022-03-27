import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View, ViewStyle } from 'react-native';
import Styles from '@Components/input/inputStyles';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
    showError?: boolean;
    errorMessage?: string;
    inputStyle?: ViewStyle;
    placeHolder: string;
    keyboardType?: KeyboardTypeOptions;
}

const InputComponent: React.FC<Props> = ({
    errorMessage,
    inputStyle,
    onChangeText,
    placeHolder,
    showError,
    value,
    keyboardType
}) => {
    return (
        <View style={inputStyle && inputStyle}>
            <Text style={Styles.placeHolderText}>{placeHolder}</Text>
            <TextInput
                style={[Styles.mainContainer, showError && Styles.mainContainerError ]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
            {(showError && errorMessage) && (
                <Text style={Styles.errorMessage}>{errorMessage}</Text>
            )}
        </View>
    );
}

export default InputComponent;
