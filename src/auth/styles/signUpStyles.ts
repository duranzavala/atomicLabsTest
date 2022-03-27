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
        marginTop: hp('1%'),
        width: wp('100%'),
    },
    mainContainer: {
        paddingHorizontal: wp('2%'),
    },
    spaceManEating: {
        height: hp('50%'),
        marginBottom: hp('1%'),
        marginTop: hp('1%'),
        width: wp('100%'),
    },
    title: {
        color: Colors.White,
        fontSize: wp('5%'),
        marginTop: hp('5%'),
        textAlign: 'left',
    },
})