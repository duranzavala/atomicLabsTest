import React from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import Styles from '@Components/input/inputStyles';
import Strings from '@Utils/strings';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
    showError?: boolean;
    errorMessage?: string;
    inputStyle?: ViewStyle;
    placeHolder: string;
}

const InputComponent: React.FC<Props> = ({
    errorMessage,
    inputStyle,
    onChangeText,
    placeHolder,
    showError,
    value,
}) => {
    return (
        <View style={inputStyle && inputStyle}>
            <Text style={Styles.placeHolderText}>{placeHolder}</Text>
            <TextInput
                style={[Styles.mainContainer, showError && Styles.mainContainerError ]}
                value={value}
                onChangeText={onChangeText}
            />
            {(showError && errorMessage) && (
                <Text style={Styles.errorMessage}>{errorMessage}</Text>
            )}
        </View>
    );
}

export default InputComponent;
