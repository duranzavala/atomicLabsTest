import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from '@Components/workWithUs/workWithUsStyle';
import { Images } from '@Assets/index';
import Strings from '@Utils/strings';

interface Props {
    handleOnPressBePartOf: () => void;
}

const WorkWithUsComponent: React.FC<Props> = ({ handleOnPressBePartOf }) => {
    return (
        <>
            <View style={Styles.thirdTitleContainer}>
                <Text style={Styles.thirdTitleText}>!TE ENCANTARÁ</Text>
                <Text style={Styles.thirdTitleTextBold}>TRABAJAR CON NOSOTROS!</Text>
            </View>
            <Image
                resizeMode='contain'
                source={Images.coworkers}
                style={Styles.coworkers}
            />
            <TouchableOpacity onPress={handleOnPressBePartOf}>
                <View style={Styles.bePartOfContainer}>
                    <Text style={Styles.bePartOfContainerText}>{Strings.wantToBePart}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default WorkWithUsComponent;
