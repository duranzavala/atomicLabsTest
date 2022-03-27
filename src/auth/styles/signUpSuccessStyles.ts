import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: wp('100%'),
    },
    bodyMessage: {
        marginTop: hp('3.5%'),
        color: Colors.White,
        fontSize: wp('4.5%'),
        textAlign: 'left',
    },
    logo: {
        height: wp('15%'),
        marginTop: hp('2%'),
        width: wp('100%'),
    },
    mainContainer: {
        paddingHorizontal: wp('2%'),
    },
    spaceManComputer: {
        height: hp('50%'),
        marginBottom: hp('1%'),
        marginTop: hp('1%'),
        width: wp('100%'),
    },
    title: {
        color: Colors.White,
        fontSize: wp('8%'),
        marginTop: hp('5%'),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleBold: {
        color: Colors.PrimaryColor,
        fontSize: wp('8%'),
        marginTop: hp('5%'),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleContainer: {
        paddingHorizontal: wp('10%'),
    },
});