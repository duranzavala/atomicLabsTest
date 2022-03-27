import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from '@Components/welcome/welcomeStyles'
import Colors from '@Utils/colors';
import Strings from '@Utils/strings';
import { Images } from '@Assets/index';

interface Props {
    handleOnPressBePartOf: () => void;
    handleOnScrollToInformation: () => void;
}

const WelcomeComponent: React.FC<Props> = ({
    handleOnPressBePartOf,
    handleOnScrollToInformation,
}) => {
    return (
        <>
            <Image
                resizeMode='contain'
                style={Styles.logo}
                source={{ uri: Images.atomicLogo }}
            />
            <View style={Styles.headerTitleContainer}>
                <Text style={Styles.headerTitleGeneral}>
                    <Text style={Styles.headerTitleRow1}>{'Desarrolla todo'}</Text>
                    <Text style={Styles.headerTitleRow2}>{'\ntu POTENCIAL'}</Text>
                    <Text style={Styles.headerTitleRow3}>{'\ndentro del equipo '}</Text>
                    <Text style={Styles.headerTitleRow4}>ATOMIC</Text>
                    <Text style={[Styles.headerTitleRow4, { color: Colors.White }]}>LABS</Text>
                </Text>
            </View>
            <TouchableOpacity onPress={handleOnScrollToInformation}>
                <View style={Styles.wantToKnowMoreContainer}>
                    <Image
                        resizeMode='contain'
                        source={Images.arrowCircleDown}
                        style={Styles.arrowCircleDown}
                    />
                    <Text style={Styles.wantToKnowMoreText}>{Strings.wantToKnowMore}</Text>
                </View>
            </TouchableOpacity>
            <Image
                resizeMode='contain'
                source={Images.spaceMan}
                style={Styles.spaceMan}
            />
            <TouchableOpacity onPress={handleOnPressBePartOf}>
                <View style={Styles.bePartOfContainer}>
                    <Text style={Styles.bePartOfContainerText}>{Strings.wantToBePart}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default WelcomeComponent;
