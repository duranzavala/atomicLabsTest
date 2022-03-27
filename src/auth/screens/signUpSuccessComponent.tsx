import { Images } from '@Assets/index';
import React, { useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import Styles from '@Auth/styles/signUpSuccessStyles';
import FooterComponent from '@Components/footer/footerComponent';
import Strings from '@Utils/strings';
import { NavigationParams, Screens } from '@Navigation/root';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<NavigationParams, Screens.SignUpSuccess> { };

const TimeToAutoNavigate = 5000;

const SignUpSuccessComponent: React.FC<Props> = ({ navigation }) => {
    useEffect(() => {
        const navigationTimeOut = setTimeout(() => {
            navigation.navigate(Screens.Home);
            clearTimeout(navigationTimeOut);
        }, TimeToAutoNavigate);
    }, []);

    return (
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
                    <View style={Styles.titleContainer}>
                        <Text style={Styles.title}>
                            {'TUS DATOS\nHA SIDO'}
                            <Text style={Styles.titleBold}> ENVIADOS </Text>
                            <Text style={Styles.titleBold}>CON ÉXITO</Text>
                        </Text>
                    </View>
                    <Text style={Styles.bodyMessage}>{Strings.signUpSuccessPhraseOne}</Text>
                    <Text style={Styles.bodyMessage}>{Strings.signUpSuccessPhraseTwo}</Text>
                    <Image
                        resizeMode='contain'
                        style={Styles.spaceManComputer}
                        source={Images.spaceManComputer}
                    />
                </View>
                <FooterComponent />
        </ScrollView>
        </ImageBackground>
    );
}

export default SignUpSuccessComponent;
