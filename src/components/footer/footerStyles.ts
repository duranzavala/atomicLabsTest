import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    allRightsReservedText: {
        alignSelf: 'center',
        color: Colors.White,
        fontSize: wp('3%'),
        marginTop: hp('5%'),
    },
    noticePrivacy: {
        alignSelf: 'center',
        color: Colors.White,
        fontSize: wp('3%'),
        marginTop: hp('3%'),
        textDecorationColor: Colors.White,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    },
    mainContainer: {
        backgroundColor: Colors.Black,
        marginTop: hp('8%'),
    },
    socialMediaContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: hp('3%'),
        paddingHorizontal: wp('35%'),
    },
    linkedInLogo: {
        height: hp('7%'),
        width: wp('7%'),
    },
    twitterLogo: {
        height: hp('7%'),
        width: wp('7%'),
    },
});
