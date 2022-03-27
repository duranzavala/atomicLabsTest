import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    coworkers: {
        height: hp('25%'),
        width: wp('100%'),
    },
    thirdTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('5%'),
        paddingHorizontal: wp('20%'),
    },
    thirdTitleText: {
        color: Colors.White,
        fontSize: wp('7%'),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    thirdTitleTextBold: {
        color: Colors.PrimaryColor,
        fontSize: wp('7%'),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
