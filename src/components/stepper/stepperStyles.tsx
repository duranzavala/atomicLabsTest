import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        marginTop: hp('4%'),
    },
    mainTitleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: hp('4%'),
        paddingStart: wp('10%'),
    },
    stepBar: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: wp('10%'),
        height: hp('1.5%'),
        marginTop: hp('1%'),
        width: wp('90%'),
    },
    stepBarCompleted: {
        backgroundColor: Colors.PrimaryColor,
    },
    stepBarHalfCompleted: {
        backgroundColor: Colors.PrimaryColor,
        borderRadius: wp('10%'),
        height: hp('1.5%'),
        width: wp('33%'),
    },
    stepOne: {
        marginTop: hp('1%'),
        width: wp('8%'),
        height: wp('8%'),
    },
    stepTwo: {
        height: wp('8%'),
        marginTop: hp('1%'),
        width: wp('8%'),
    },
    stepsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('100%'),
    },
    titleRowOne: {
        color: Colors.White,
        fontSize: wp('8%'),
        fontWeight: 'bold',
        textAlign: 'left',
    },
    titleRowTwo: {
        color: Colors.PrimaryColor,
        fontSize: wp('8%'),
        fontWeight: 'bold',
        textAlign: 'left',
    },
    titleStepNumber: {
        height: wp('10%'),
        marginTop: hp('1%'),
        width: wp('10%'),
    },
    titleTextContainer: {
        marginLeft: wp('10%'),
    }
});
