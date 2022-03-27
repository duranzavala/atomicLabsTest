import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    imageMember: {
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: wp('25%'),
        height: wp('40%'),
        width: wp('40%'),
    },
    mainContainer: {
        alignItems: 'center',
        marginBottom: hp('8%'),
        width: wp('100%'),
    },
    memberCardContainer: {
        backgroundColor: Colors.Secondary,
        borderRadius: wp('2.5%'),
        justifyContent: 'flex-start',
        marginTop: hp('2.5%'),
        paddingVertical: hp('2.5%'),
        width: wp('95%'),
    },
    nameText: {
        color: Colors.White,
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
        marginTop: hp('4%'),
        textAlign: 'center',
    },
    roleText: {
        color: Colors.White,
        fontSize: wp('4%'),
        marginTop: hp('1%'),
        textAlign: 'center',
    },
    ourTeamText: {
        color: Colors.White,
        fontSize: wp('9%'),
        fontWeight: 'bold',
        marginBottom: hp('4%'),
        marginTop: hp('6%'),
        textAlign: 'center',
    },
    ourTeamTextBold: {
        color: Colors.PrimaryColor,
        fontSize: wp('9%'),
        marginTop: hp('1%'),
        textAlign: 'center',
    },
});
