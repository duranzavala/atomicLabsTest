import React from 'react';
import { Image, Text, View } from 'react-native';
import Styles from '@Components/footer/footerStyles';
import Strings from '@Utils/strings';
import { Images } from '@Assets/index';

const FooterComponent: React.FC = () => {
    return (
        <View style={Styles.mainContainer}>
            <Text style={Styles.allRightsReservedText}>{Strings.allRightsReserved}</Text>
            <Text style={Styles.noticePrivacy}>{Strings.noticePrivacy}</Text>
            <View style={Styles.socialMediaContainer}>
                <Image
                    resizeMode='contain'
                    source={Images.linkedIn}
                    style={Styles.linkedInLogo}
                />
                <Image
                    resizeMode='contain'
                    source={Images.twitter}
                    style={Styles.twitterLogo}
                />
            </View>
        </View>
    );
}

export default FooterComponent;
