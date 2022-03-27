import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: wp('100%'),
    },
    button: {
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
    input: {
        marginTop: '5%',
    },
    keyboardContainer: {
        flex: 1,
    },
    logo: {
        height: wp('15%'),
        marginTop: hp('2%'),
        width: wp('100%'),
    },
    mainContainer: {
        paddingHorizontal: wp('2%'),
    },
    spaceManMoon: {
        height: hp('55%'),
        marginBottom: hp('1%'),
        marginTop: hp('1%'),
        width: wp('100%'),
    },
    phraseOne: {
        color: Colors.White,
        fontSize: wp('4%'),
        marginTop: hp('5%'),
        textAlign: 'justify',
    },
    phraseTwo: {
        color: Colors.White,
        fontSize: wp('4%'),
        marginTop: hp('2%'),
        textAlign: 'justify',
    },
});
