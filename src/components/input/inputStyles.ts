import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    errorMessage: {
        color: Colors.Red,
        fontSize: wp('3.5%'),
        fontWeight: 'bold',
        marginTop: hp('0.5%'),
        textAlign: 'left',
    },
    mainContainer: {
        backgroundColor: Colors.White,
        borderRadius: wp('1%'),
        fontSize: wp('4%'),
        height: hp('5.5%'),
        justifyContent: 'center',
        marginTop: hp('1%'),
        paddingStart: wp('2%'),
        width: wp('95%'),
    },
    mainContainerError: {
        borderColor: Colors.Red,
        borderWidth: wp('0.5%'),
    },
    placeHolderText: {
        borderRadius: wp('1%'),
        color: Colors.White,
        fontSize: wp('4%'),
    },
});
