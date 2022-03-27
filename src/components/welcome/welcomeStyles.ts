import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';
import Colors from '@Utils/colors';


export default StyleSheet.create({
    arrowCircleDown: {
        height: hp('6%'),
        width: wp('15%'),
    },
    bePartOfContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: wp('5%'),
        height: hp('8.5%'),
        justifyContent: 'center',
        width: wp('60%'),
    },
    bePartOfContainerText: {
        color: Colors.Secondary,
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
    },
    headerTitleGeneral: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTitleRow1: {
        color: Colors.White,
        fontSize: wp('12%'),
    },
    headerTitleRow2: {
        color: Colors.PrimaryColor,
        fontSize: wp('12.5%'),
    },
    headerTitleRow3: {
        color: Colors.White,
        fontSize: wp('10.3%'),
    },
    headerTitleRow4: {
        color: Colors.PrimaryColor,
        fontSize: wp('13%'),
    },
    headerTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('3%'),
        paddingHorizontal: wp('3%'),
        width: wp('100%'),
    },
    logo: {
        height: hp('7%'),
        marginTop: hp('1%'),
        width: wp('100%'),
    },
    spaceMan: {
        height: hp('35%'),
        marginBottom: hp('4%'),
        marginTop: hp('4%'),
        width: wp('100%'),
    },
    wantToKnowMoreContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
    },
    wantToKnowMoreText: {
        color: Colors.White,
        fontSize: wp('5%'),
        fontWeight: '500',
        marginTop: hp('1%'),
        textAlign: 'center',
    },
});
