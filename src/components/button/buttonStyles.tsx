import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    disabledButton: {
        opacity: 0.6,
    },
    mainContainer: {
        alignItems: 'center',
        backgroundColor: Colors.PrimaryColor,
        borderRadius: wp('5.5%'),
        height: hp('5.5%'),
        justifyContent: 'center',
        width: wp('60%'),
    },
    mainText: {
        color: Colors.White,
        fontSize: wp('5%'),
    },
})