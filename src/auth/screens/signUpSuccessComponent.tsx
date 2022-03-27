import { Images } from '@Assets/index';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import Styles from '@Auth/styles/signUpSuccessStyles';
import FooterComponent from '@Components/footer/footerComponent';
import Strings from '@Utils/strings';

const SignUpSuccessComponent: React.FC = () => {
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
